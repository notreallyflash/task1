# Task1 App

A mobile application with multiple screens built using React Native and Expo.

## Features

This app includes three main screens:

### 🏠 Home Screen
- Welcome message
- Featured content cards
- Quick actions overview
- Recent activity section

### 👤 Profile Screen
- User profile with avatar
- Personal information (bio, location, join date)
- User statistics (posts, followers, following)
- Clean, organized layout

### ⚙️ Settings Screen
- Preferences (notifications, dark mode, location)
- Account management options
- Support and help resources
- App version information

## Navigation

The app features a bottom tab navigation bar that allows users to easily switch between screens.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the app:
```bash
npm start
```

3. Run on specific platform:
```bash
npm run android  # For Android
npm run ios      # For iOS
npm run web      # For Web
```

## Project Structure

```
task1/
├── App.js                    # Main app component with navigation logic
├── screens/
│   ├── HomeScreen.js         # Home screen component
│   ├── ProfileScreen.js      # Profile screen component
│   └── SettingsScreen.js     # Settings screen component
├── components/
│   └── Navigation.js         # Bottom tab navigation component
├── package.json              # Project dependencies
├── app.json                  # Expo configuration
└── babel.config.js           # Babel configuration
```

## Technologies Used

- React Native
- Expo
- JavaScript (ES6+)

## License

MIT
