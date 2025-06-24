# Thai with Tip

Welcome to **Thai with Tip**, a simple learning site for beginners who want to start speaking Thai. The project contains a few static pages with vocabulary and dialogue examples.

## Running Locally

Because the project is entirely client‑side HTML, CSS, and JavaScript, you can preview it in two ways:

1. **Directly open** `index.html` in your browser.
2. Or, serve the folder with a lightweight HTTP server if you prefer:
   ```bash
   # Python 3 example
   python3 -m http.server
   ```
   Then visit `http://localhost:8000` in your browser.

## Making it a Progressive Web App (PWA)

To turn the site into an installable PWA:

1. **Add a `manifest.json`** with your app name, icons, and display settings.
   Link it from `index.html`:
   ```html
   <link rel="manifest" href="manifest.json">
   ```
2. **Register a service worker** that caches site assets for offline use. A small example in `service-worker.js` might precache your HTML, CSS, images, and scripts.
3. Include the following in your JavaScript (for example in `script.js`):
   ```javascript
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('service-worker.js');
   }
   ```

With those files, browsers can install the site and use it offline.

## Deployment and Mobile Wrappers

This project is static, so you can host it on services such as GitHub Pages, Netlify, or any simple web server. If you want an app store presence, you can bundle the PWA using wrappers like **Cordova**, **Capacitor**, or similar tools to produce iOS/Android packages.
