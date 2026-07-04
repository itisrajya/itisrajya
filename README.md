# Terminal Portfolio

A personal portfolio built with Angular 15 that emulates a terminal-style interface and now includes a real-time chat system powered by SignalR.

## Overview

This project is an Angular application named `terminal-portfolio`. It uses a terminal-inspired UI and a command-driven navigation system to showcase portfolio information, projects, skills, and experience while allowing visitors to communicate directly with the portfolio owner through a live chat interface.

## Key Features

- Terminal-style portfolio interface
- Modular command-based navigation
- Real-time visitor/admin chat using SignalR
- Automatic chat session creation
- Email notification when a visitor starts a chat
- Live messaging without polling
- Automatic chat session expiration after 60 seconds of inactivity
- Separate Visitor and Admin chat modes
- Multiple theme bundles:
  - dark
  - light
  - ubuntu
  - espresso
  - paradise
- Angular 15 application with SCSS styling
- Built-in support for unit testing and linting

## Available Commands

| Command | Description |
|----------|-------------|
| `help` | Display available commands |
| `welcome` | Welcome message |
| `about` | About me |
| `education` | Education details |
| `experience` | Professional experience |
| `projects` | Featured projects |
| `skills` | Technical skills |
| `certificates` | Certifications |
| `interests` | Personal interests |
| `themes` | Change terminal theme |
| `cv` | Download resume |
| `email` | Send an email |
| `github` | Open GitHub profile |
| `linkedin` | Open LinkedIn profile |
| `twitter` | Open Twitter/X profile |
| `chat` | Start a live chat session with me|
| `clear` | Clear the terminal |

## Live Chat

The portfolio now includes a built-in real-time chat system.

### Visitor Flow

```text
Visitor

↓

Type "chat"

↓

Chat Session Created

↓

Email Notification Sent

↓

Admin Opens Shared Link

↓

Real-time Conversation

↓

Session Expires After 60 Seconds of Inactivity
```

### Chat Features

- SignalR-powered real-time messaging
- Automatic session creation
- Live admin/visitor communication
- Instant message synchronization
- Duplicate message prevention
- Automatic session cleanup
- Session expiration after inactivity

## Project Structure

- `src/app/commands/` - Feature command modules for each portfolio section
- `src/app/components/terminal/` - Terminal UI component
- `src/app/components/chat/` - Real-time chat component
- `src/app/components/chip/` - UI chip component
- `src/app/shared/` - Shared models, services, and command data
- `src/styles/` - Application and theme styles
- `src/assets/` - Static assets and icons

## Technologies

- Angular 15
- TypeScript
- RxJS
- SignalR Client
- SCSS
- Bootstrap

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Then open:

```
http://localhost:4200
```

### Build for production

```bash
npm run build
```

### Build with custom base href

```bash
npm run build:prod
```

### Run tests

```bash
npm test
```

### Lint the project

```bash
npm run lint
```

## Notes

- The app uses Angular CLI configuration in `angular.json`.
- The terminal UI is rendered via the `app-terminal` component in `src/app/app.component.html`.
- Chat functionality is implemented using SignalR for real-time communication with the ASP.NET Core backend.
- Theme bundles are configured and can be loaded separately, with main styles located in `src/styles.scss`.
- The backend API handles chat sessions, email notifications, and automatic cleanup of inactive sessions.

## Future Enhancements

- AI assistant integration
- Typing indicators
- Read receipts
- File attachments
- Chat history persistence
- User authentication
- Progressive Web App (PWA) support
- Additional terminal themes

## Author

**Rajya Vardhan**

🌐 Portfolio: https://itisrajya.net

💻 GitHub: https://github.com/itisrajya

🔗 LinkedIn: https://www.linkedin.com/in/itisrajya

🐥 X: https://www.x.com/itisrajya