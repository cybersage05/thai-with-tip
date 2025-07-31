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

This project is static, so hosting it is as simple as uploading the files to a service such as GitHub Pages or Netlify. To distribute it through app stores you can wrap the site with tools like **Cordova** or **Capacitor**.

### Prerequisites

1. [Node.js](https://nodejs.org) installed and available in your PATH.
2. Either Cordova (`npm install -g cordova`) or Capacitor (`npm install -g @capacitor/cli`).

### Cordova example

```bash
cordova create thai-app com.example.thaiapp ThaiApp
cd thai-app
cordova platform add android ios
# Copy the static site into Cordova's www folder
rm -rf www/*
cp -r ../thai-with-tip/* www/
cordova build android  # Produces an APK
cordova build ios      # Requires Xcode to produce an IPA
```

### Capacitor example

```bash
npm init @capacitor/app thai-app
cd thai-app
npx cap add android
npx cap add ios
rm -rf www/*
cp -r ../thai-with-tip/* www/
npx cap copy
npx cap open android   # or 'npx cap open ios'
```

The `www` directory in each wrapper serves your static files. After copying the site and running the build commands above you'll get native projects that can be opened with Android Studio or Xcode to generate final APK or IPA packages.
