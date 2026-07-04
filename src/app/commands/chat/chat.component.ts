import { Component, OnInit, OnDestroy, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatService } from './chat.service';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  chatSessionId = '';
  chatLink = '';
  chatStatus = 'starting';
  chatMessages: any[] = [];
  chatDraftMessage = '';
  private destroy$ = new Subject<void>();
  private hubConnection!: signalR.HubConnection;
  isAdminView = false;
  @ViewChild('chatThread')
  chatThread!: ElementRef<HTMLDivElement>;
  private shouldScroll = false;

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  private scrollToBottom(): void {
    requestAnimationFrame(() => {
      if (!this.chatThread) {
        return;
      }

      const element = this.chatThread.nativeElement;

      element.scroll({
        top: element.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  constructor(private chatService: ChatService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);

    const sessionId = urlParams.get('sessionId');

    if (sessionId) {
      // Admin view
      this.isAdminView = true;
      this.chatSessionId = sessionId;
      this.chatLink = window.location.href;
      this.chatStatus = 'active';

      this.loadMessages();
    } else {
      // Visitor view
      this.createSession();
    }
  }

  loadMessages() {
    this.chatService.getMessages(this.chatSessionId).subscribe({
      next: (res) => {
        this.chatMessages = res.messages.map((m: any) => ({
          role: m.sender,
          content: m.message,
          node: m.node
        }));

        this.cdr.detectChanges();
        this.scrollToBottom();
        this.connectToSignalR();
      },

      error: () => {
        this.chatStatus = 'expired';
      }
    });
  }

  async ngOnDestroy(): Promise<void> {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.hubConnection) {
      await this.hubConnection.stop();
    }
  }

  createSession() {
    this.chatService.startSession().subscribe((res) => {
      this.chatSessionId = res.sessionId;

      this.chatLink = `https://itisrajya.net/?command=chat&sessionId=${this.chatSessionId}`;

      this.chatStatus = 'active';

      this.sendNotification();

      this.loadMessages();
    });
  }

  sendNotification() {
    this.chatService.sendNotification(this.chatSessionId, this.chatLink).subscribe();
  }

  sendChatMessage() {
    if (this.chatStatus === 'expired') {
      return;
    }

    if (!this.chatDraftMessage.trim()) {
      return;
    }

    const msg = this.chatDraftMessage;

    this.chatDraftMessage = '';

    this.chatService.sendMessage(this.chatSessionId, this.isAdminView ? 'admin' : 'user', msg).subscribe();
  }

  connectToSignalR() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://itisrajya.net/itisrajya-api/chatHub')
      .withAutomaticReconnect()
      .build();

    this.hubConnection.on('ReceiveMessage', (message: any) => {
      const exists = this.chatMessages.some((x) => x.node === message.node);

      if (exists) {
        return;
      }

      this.chatMessages.push({
        role: message.sender,
        content: message.message,
        node: message.node
      });
      this.cdr.detectChanges();
      this.shouldScroll = true;
    });

    this.hubConnection.on('SessionExpired', async () => {
      this.chatStatus = 'expired';
      this.chatMessages = [];

      this.cdr.detectChanges();

      await this.hubConnection.stop();
    });

    // Start connection
    this.hubConnection
      .start()
      .then(() => {
        console.log('SignalR Connected');

        return this.hubConnection.invoke('JoinSession', this.chatSessionId);
      })
      .then(() => {
        console.log('Joined session:', this.chatSessionId);
      })
      .catch((err) => {
        console.error('SignalR Error:', err);
      });
  }
}
