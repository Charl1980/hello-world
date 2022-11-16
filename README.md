# Chat App

## Description
This is a native mobile app built using React Native that allows users to enter a chat room, then send messages, images, and their location.

## Objective
To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.

## Tech used
- React Native
- Expo App
- Android Emulator

## User Stories
1. As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.
2. As a user, I want to be able to send messages to my friends and family members to exchange the latest news.
3. As a user, I want to send images to my friends to show them what I’m currently doing.
4. As a user, I want to share my location with my friends to show them where I am
5. As a user, I want to be able to read my messages offline so I can reread conversations at any time.
6. As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface

## Development Process
### Setup Expo as Development Environment
1. Install Expo CLI
```
npm install expo-cli --location=global
```

2. Create a new expo project
```
expo init [projectname]
```

3. Navigate to the project
```
cd [projectname]
```

4. Start expo project
```
npm start or expo start
```

### Install React Navigation library to navigate between screens

1. Navigate to project folder and run
```
npm install react-navigation
```

2. Install necessary dependencies
```
npm install @react-navigation/native @react-navigation/stack
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

3. Update presets and add plugin to babel.config.js file
```
module.exports = function (api) {
  api.cache(true);
  return {
    //presets: ['babel-preset-expo'],
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

### Set up Android Studio as Android Emulator

1. Download Android Studio
2. Make sure 'Android Virtual Device' is installed
3. Add Android SDK Location to ~/.zshrc file
```
export ANDROID_SDK=/Users/myuser/Library/Android/sdk
export PATH=/Users/myuser/Library/Android/sdk/platform-tools:$PATH
```

4. Create virtual device and click play to start

5. Select 'Run app on Android' in Expo to run app on virtual device

### Install React Native library Gifted Chat for developing chat apps

1. Navigate to project folder and run
```
npm install react-native-gifted-chat --save
```

2. Import Gifted Chat and the Bubble component to Chat.js
```
import { Bubble, GiftedChat } from 'react-native-gifted-chat'; 
```
## Dependencies
"@expo/react-native-action-sheet": "^4.0.1",
"@react-native-async-storage/async-storage": "~1.17.3",
"@react-native-community/masked-view": "^0.1.11",
"@react-native-community/netinfo": "9.3.0",
"@react-navigation/native": "^6.0.13",
"@react-navigation/stack": "^6.3.1",
"expo": "~46.0.9",
"expo-image-picker": "~13.3.1",
"expo-location": "~14.3.0",
"expo-permissions": "~13.2.0",
"expo-status-bar": "~1.4.0",
"firebase": "^7.9.0",
"react": "18.0.0",
"react-native": "0.69.6",
"react-native-gesture-handler": "~2.5.0",
"react-native-gifted-chat": "^1.0.4",
"react-native-maps": "0.31.1",
"react-native-reanimated": "~2.9.1",
"react-native-safe-area-context": "4.3.1",
"react-native-screens": "~3.15.0",
"react-navigation": "^4.4.4"

## How to run the project
You can use any Emulator or Simulator to run the app on your device. To test this app, I have used Expo Go on iOS and the Android Emulator. To test the app with Expo, follow the below steps:

1. Clone repository: git clone https://github.com/Charl1980/hello-world

2. Install Expo CLI as a global npm package: npm install --global expo-cli

3. Install all dependecies: npm install

4. Start project: expo start / npx expo start

5. Launch the app on Expo


