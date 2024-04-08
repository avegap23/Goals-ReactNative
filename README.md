A simple app we made at class as our first approach to React Native.

It's a "TODO list" app that lets you input your own tasks _(or goals, I don't know why I called them goals instead of tasks)_ and they will be appearing in the main screen. To delete a task, just simply click on it.

# 🛠️ Building the project
**_⚠️ You will need Node.js in your machine. If you don't have it yet, you can get the installer [here](https://nodejs.org/en)._**

## 1. Installing dependencies

This project uses npm to manage its dependencies. Open a terminal in the project directory and write this command:
```
npm install
```

## 2. Starting Expo server

Now run this:
```
npm start
```

Expo will now do its thing. It will finish when the terminal prints a QR code and a list of commands.

## 3. Building the app

_(I have tried this on Android only, but I guess its the same process for iOS)_

As shown in the command list, press <kbd>A</kbd> to open the app in an Android device. If you have multiple devices connected to your machine (emulators, physical devices) you can press <kbd>Shift</kbd>+<kbd>A</kbd> to choose one.

Expo Go will now install into your device. If you had it already installed, Expo will probably ask you through the terminal to update it. You can just press <kbd>N</kbd> to cancel it. The app should work fine in your "outdated" Expo Go.

The app will finally start building and it will open automatically.

**_NOTE: Remember you can press <kbd>Ctrl</kbd>+<kbd>C</kbd> to stop Expo server and return to Shell. This will, however, disconnect Expo Go and the app will stop updating dynamically when changing the code._**

# 📋 TODO
- [ ] Finishing commenting the code properly
- [ ] Overall reviewing the code in case there are bugs or if I could make it more simple
