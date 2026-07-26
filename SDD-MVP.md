# Software Design Document — MVP

## 1. Product vision

Australian Intelligence is a distinctive comedic digital character rather than a generic chatbot. The product promise is immediate: questions are interpreted through recognisably Australian language, understatement, practical advice and cultural references.

## 2. MVP scope

The MVP is a static web application deployable to GitHub Pages. It must function without a server, preserve user state locally, support typed and spoken interaction, operate offline after first load and provide multiple selectable personalities.

## 3. Architecture

The browser loads `app.js`, which owns interface state, browser APIs, persistence and progressive-web-app behaviour. `engine.js` is a pure response engine and can be tested independently.

Processing flow:

1. Input normalisation
2. Serious-topic safety matching
3. Easter-egg matching
4. Category classification
5. Personality selection
6. Response randomisation
7. Rendering and optional speech
8. Achievement evaluation
9. Local persistence

## 4. Safety design

Urgent safety patterns are evaluated before comedy categories. Matched inputs receive a concise redirection to emergency or trusted real-world support. The comedic engine is bypassed for those responses.

The MVP does not attempt diagnosis, personalised medical advice, legal advice or emergency triage.

## 5. Voice integration

Voice input uses `SpeechRecognition` or `webkitSpeechRecognition` with locale `en-AU`. Voice output uses `SpeechSynthesisUtterance`. The application preferentially selects an installed `en-AU` voice, then falls back to another English voice.

Voice identity therefore depends on the device. A consistent branded voice would require licensed audio or a hosted text-to-speech provider in a later release.

## 6. Data and privacy

All settings and achievements are stored in `localStorage`. Questions are processed locally and are not transmitted by the application. Browser speech-recognition implementations may use vendor services; the browser and operating system control that behaviour.

## 7. Extensibility

The response engine is intentionally separable from the interface. Future adapters may implement:

- JSON response packs
- Community packs with moderation
- State and occupation modes
- Hosted LLM generation
- Local LLM generation
- Branded text-to-speech
- Avatar animation
- Party or multiplayer modes

## 8. Acceptance criteria

The build is acceptable when:

- It loads without console errors from GitHub Pages.
- Typed questions return responses.
- Each personality alters response style.
- Voice input is enabled where supported and fails gracefully elsewhere.
- Speech output works where supported.
- Safety patterns bypass comedy.
- Achievements persist across reloads.
- The app installs as a PWA where supported.
- Core assets are available offline after first successful load.
