# Heroic Chronicle

A rework of the Heroic Chronicle system.

## The app

A desktop app that runs the Heroic Chronicle for you, step by step or all at once. It lives in [`app/`](app/).

```sh
cd app
npm install
npm run desktop        # run the desktop app in development
npm run desktop:build  # build a release (.app on macOS)
npm run dev            # or run it in a browser at http://localhost:5173
npm test               # engine and table tests
```

Building the desktop app needs [Rust](https://www.rust-lang.org/tools/install) and the [Tauri prerequisites](https://tauri.app/start/prerequisites/).

Chronicles are data modules in `app/src/chronicles/`. The original is in `original/`; a reworked version can be added beside it and registered in `chronicles/index.ts`.
