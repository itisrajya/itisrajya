import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Subscription } from 'rxjs';
import { availableCommands, parentCommands } from 'src/app/shared/data/commands.data';
import { cvURL, email, linkedInProfileURL, twitterProfileURL, githubProfileUrl } from 'src/app/shared/data/utils.data';
import { ECommandType, ICommandItem } from 'src/app/shared/models/commands.model';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('commandInputs') commandInputs!: QueryList<ElementRef>;
  commandItems: ICommandItem[] = [
    {
      id: 0,
      disabled: true,
      command: ECommandType.WELCOME,
      exists: true,
      entered: true
    },
    {
      id: 1,
      disabled: false,
      command: ECommandType.EMPTY,
      exists: true,
      entered: false
    }
  ];
  currentCommandId = 1;
  hints: ECommandType[] = [];
  currentHintIndex = 0;
  autoFocusSubscription!: Subscription;

  @HostListener('document:keydown.arrowdown', ['$event'])
  onArrowDown(event: Event) {
    const keyboardEvent = event as KeyboardEvent;

    keyboardEvent.preventDefault();
    this.focusOnInputField();
    this.goToNextStep();
  }

  @HostListener('document:keydown.arrowup', ['$event'])
  onArrowUp(event: Event) {
    const keyboardEvent = event as KeyboardEvent;

    keyboardEvent.preventDefault();
    this.focusOnInputField();
    this.goToPreviousStep();
  }

  @HostListener('document:keydown.control.l', ['$event'])
  onControlL(event: Event) {
    const keyboardEvent = event as KeyboardEvent;

    keyboardEvent.preventDefault();
    this.focusOnInputField();
    this.clearTerminal();
  }

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);

    const command = params.get('command');
    const sessionId = params.get('sessionId');

    if (command === 'chat' && sessionId) {
      this.commandItems = [
        {
          id: 0,
          disabled: true,
          command: ECommandType.CHAT,
          exists: true,
          entered: true
        },
        {
          id: 1,
          disabled: false,
          command: ECommandType.EMPTY,
          exists: true,
          entered: false
        }
      ];

      this.currentCommandId = 1;
    }
  }

  ngAfterViewInit(): void {
    this.autoFocusSubscription = this.commandInputs.changes.subscribe(() => {
      if (this.commandInputs.length) this.commandInputs.last.nativeElement.focus();
    });
  }

  getHints(id: number) {
    this.currentHintIndex = 0;
    const commandItem = this.findCommandItemById(id);
    if (!commandItem) {
      return;
    }

    if (commandItem.command === '') {
      this.hints = [];
      return;
    }

    this.hints = availableCommands
      .filter((command) => command.name.startsWith(commandItem.command))
      .map((command) => command.name as ECommandType);
  }

  autoComplete(id: number) {
    if (this.currentHintIndex >= this.hints.length) {
      return;
    }

    const commandItem = this.findCommandItemById(id);
    if (!commandItem) {
      return;
    }

    commandItem.command = this.hints[this.currentHintIndex];
    this.currentHintIndex += 1;
  }

  executeCommand(id: number): void {
    const commandItem = this.findCommandItemById(id);
    if (!commandItem) {
      return;
    }

    const givenCommand = commandItem.command;
    if (givenCommand === ECommandType.CLEAR) {
      this.clearTerminal();
      return;
    } else if (givenCommand === ECommandType.CV) {
      this.downloadCV();
    } else if (givenCommand === ECommandType.EMAIL) {
      this.mailMe();
    } else if (givenCommand === ECommandType.LINKEDIN) {
      this.goToLinkedin();
    } else if (givenCommand === ECommandType.TWITTER) {
      this.goToTwitter();
    } else if (givenCommand === ECommandType.GITHUB) {
      this.goToGithub();
    }

    commandItem.disabled = true;
    commandItem.entered = true;
    commandItem.exists = this.checkIfCommandExists(givenCommand);
    this.currentCommandId = this.commandItems.length;

    this.commandItems.push({
      id: this.currentCommandId,
      disabled: false,
      command: ECommandType.EMPTY,
      exists: true,
      entered: false
    });
  }

  findCommandItemById(id: number): ICommandItem | undefined {
    return this.commandItems.find((item) => item.id === id);
  }

  checkIfCommandExists(command: ECommandType): boolean {
    for (const parentCommand of parentCommands) {
      if (command.startsWith(parentCommand)) return true;
    }
    return Object.values(ECommandType).includes(command);
  }

  goToPreviousStep() {
    if (this.currentCommandId > 0) {
      this.currentCommandId -= 1;
      this.getLastCommand().command = this.commandItems[this.currentCommandId].command;
    }
  }

  goToNextStep() {
    if (this.currentCommandId < this.commandItems.length - 1) {
      this.currentCommandId += 1;
      this.getLastCommand().command =
        this.currentCommandId == this.commandItems.length - 1
          ? ECommandType.EMPTY
          : this.commandItems[this.currentCommandId].command;
    }
  }

  getLastCommand() {
    return this.commandItems[this.commandItems.length - 1];
  }

  focusOnInputField() {
    this.commandInputs.last.nativeElement.focus();
  }

  clearTerminal() {
    this.commandItems = [
      {
        id: 0,
        disabled: false,
        command: ECommandType.EMPTY,
        exists: true,
        entered: false
      }
    ];
  }

  downloadCV() {
    window.open(cvURL, '_blank');
  }

  mailMe() {
    const mailText = `mailto:${email}`;
    window.location.href = mailText;
  }

  goToLinkedin() {
    window.open(linkedInProfileURL, '_blank');
  }

  goToTwitter() {
    window.open(twitterProfileURL, '_blank');
  }

  goToGithub() {
    window.open(githubProfileUrl, '_blank');
  }

  ngOnDestroy(): void {
    this.autoFocusSubscription?.unsubscribe();
  }
}
