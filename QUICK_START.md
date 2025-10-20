# Quick Start Guide

Get your app up and running in minutes!

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Expo CLI** (optional, but recommended) - Install with: `npm install -g expo-cli`

For mobile testing:
- **Expo Go** app on your iOS or Android device
- OR an iOS Simulator (Mac only) / Android Emulator

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install:
- React Native
- Expo
- Babel (for JavaScript transpilation)

### 2. Start the Development Server

```bash
npm start
```

This will:
- Start the Expo development server
- Open a browser with the Expo developer tools
- Display a QR code for mobile testing

### 3. Run on Your Device

#### Option A: Physical Device (Easiest)

1. Install **Expo Go** from:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Scan the QR code from the terminal or browser using:
   - **iOS**: Camera app
   - **Android**: Expo Go app

3. The app will load on your device!

#### Option B: iOS Simulator (Mac only)

```bash
npm run ios
```

#### Option C: Android Emulator

```bash
npm run android
```

Note: Make sure you have Android Studio installed and an emulator set up.

#### Option D: Web Browser

```bash
npm run web
```

## Exploring the App

Once the app is running, you'll see:

### Home Screen (Default)
- Welcome message
- Featured content
- Quick actions list
- Recent activity

### Profile Screen
- Tap the 👤 icon in the bottom navigation
- View user profile with avatar
- See user stats (posts, followers, following)

### Settings Screen
- Tap the ⚙️ icon in the bottom navigation
- Toggle preferences (notifications, dark mode, location)
- Explore account and support options

## Making Changes

The app supports hot reloading, so you can:

1. Open any file in your favorite editor
2. Make changes
3. Save the file
4. See the changes instantly on your device/simulator!

### Example: Change the Welcome Text

1. Open `screens/HomeScreen.js`
2. Find the line: `<Text style={styles.welcomeText}>Welcome to the App!</Text>`
3. Change it to: `<Text style={styles.welcomeText}>Hello World!</Text>`
4. Save the file
5. The app will automatically reload with your changes!

## Customization Tips

### Change Header Colors

Each screen has a unique header color defined in its StyleSheet:

- **Home**: `backgroundColor: '#2196F3'` (Blue)
- **Profile**: `backgroundColor: '#9C27B0'` (Purple)
- **Settings**: `backgroundColor: '#4CAF50'` (Green)

### Add More Content

To add new cards to the Home screen:

```javascript
<View style={styles.card}>
  <Text style={styles.cardTitle}>Your New Card</Text>
  <Text style={styles.cardText}>
    Your content here
  </Text>
</View>
```

### Modify User Profile

In `screens/ProfileScreen.js`, update the user information:

```javascript
<Text style={styles.name}>Your Name</Text>
<Text style={styles.email}>your.email@example.com</Text>
```

## Troubleshooting

### Issue: Metro bundler error

**Solution**: Clear the cache and restart:
```bash
npm start -- --clear
```

### Issue: Can't connect on physical device

**Solution**: Ensure your device and computer are on the same Wi-Fi network

### Issue: Module not found error

**Solution**: Reinstall dependencies:
```bash
rm -rf node_modules
npm install
```

### Issue: Expo app not opening

**Solution**: 
1. Make sure Expo Go is updated to the latest version
2. Try closing and reopening the app
3. Restart the development server

## Next Steps

Now that you have the app running:

1. ✅ Explore all three screens
2. ✅ Try making small changes to see hot reloading in action
3. ✅ Customize the colors and content
4. ✅ Add your own features!

## Useful Commands

```bash
# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web

# Clear cache and restart
npm start -- --clear
```

## Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Documentation](https://react.dev/)

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the error messages in the terminal
3. Consult the Expo documentation

Happy coding! 🎉
