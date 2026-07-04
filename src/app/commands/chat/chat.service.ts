import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { email } from 'src/app/shared/data/utils.data';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly api = 'https://itisrajya.net/itisrajya-api/chat';

  constructor(private http: HttpClient) {}

  startSession(): Observable<any> {
    return this.http.post<any>(`${this.api}/start`, {});
  }

  sendNotification(sessionId: string, chatLink: string): Observable<any> {
    return this.http.post<any>(`${this.api}/send-chat-notification`, {
      adminEmail: email,
      chatSessionId: sessionId,
      chatLink: chatLink
    });
  }

  sendMessage(sessionId: string, sender: string, message: string): Observable<any> {
    return this.http.post<any>(`${this.api}/message`, {
      sessionId,
      sender,
      message
    });
  }

  getMessages(sessionId: string): Observable<any> {
    return this.http.get<any>(`${this.api}/messages/${sessionId}`);
  }
}
