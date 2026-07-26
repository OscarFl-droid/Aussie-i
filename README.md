# Australian Intelligence v1.1

**Not artificial. Just Australian.**

A static, voice-enabled parody web application designed for GitHub Pages. It accepts typed or spoken questions and produces personality-driven Australian responses using a deterministic, local-first rule engine.

## Features

- Typed and spoken questions
- Australian-English speech synthesis
- Six personality modes
- Safety redirection for urgent topics
- Achievements and Easter eggs
- Installable Progressive Web App
- Offline support after first load
- No backend and no account required
- GitHub Pages deployment workflow

## Run locally

A local web server is required because service workers and JavaScript modules do not run correctly from `file://`.

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Test

Requires Node.js 20 or later.

```bash
npm test
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, select **GitHub Actions** as the source.
4. Push to `main`.
5. The included workflow publishes the site automatically.

## Browser support

Text mode works in current evergreen browsers. Speech synthesis is broadly available, but the exact voice depends on voices installed by the operating system. Voice recognition uses `SpeechRecognition` or `webkitSpeechRecognition`; support is strongest in Chromium browsers and Safari on current Apple platforms.

## Important

This is a comedy application. It is not affiliated with the Australian Government. It should not be used for emergency, medical, legal, financial or safety-critical decision-making.

## Licence

MIT.


## v1.1 changes

- Complete Australian-government-style visual redesign
- Full-sentence, intent-specific humour rather than repeated opener/body/closer templates
- Distinct reasoning styles for all six divisions
- Recent-response suppression to reduce repetition
- Actual device voice selector and voice test
- Improved iPhone voice disclosure and controls
