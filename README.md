# Terminal Portfolio

A personal portfolio built with Angular 15 that emulates a terminal-style interface.

## Overview

This project is an Angular application named `terminal-portfolio`. It uses a terminal-inspired UI and a command-driven navigation system to present sections such as About, Certificates, Education, Interests, Projects, Skills, Themes, Welcome, and Work.

## Key Features

- Terminal-style portfolio interface
- Modular command-based navigation
- Multiple theme bundles:
  - dark
  - light
  - ubuntu
  - espresso
  - paradise
- Angular 15 application with SCSS styling
- Built-in support for unit testing and linting

## Project Structure

- `src/app/commands/` - feature command modules for each portfolio section
- `src/app/components/terminal/` - terminal UI component
- `src/app/components/chip/` - UI chip component
- `src/styles/` - application and theme styles
- `src/assets/` - static assets and icons

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Then open `http://localhost:4200` in your browser.

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
- Theme bundles are configured and can be loaded separately, with main styles in `src/styles.scss`.

## Author

Created as a personal portfolio project in Angular.
