# App Structure Diagram

## Visual Layout

```
┌─────────────────────────────────────────┐
│           App.js (Main)                 │
│  ┌───────────────────────────────────┐  │
│  │    currentScreen State            │  │
│  │    renderScreen() Logic           │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │      Screen Content Area          │  │
│  │  (Home/Profile/Settings)          │  │
│  │                                   │  │
│  │          (Scrollable)             │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │     Navigation Component          │  │
│  │  [🏠 Home] [👤 Profile] [⚙️ Settings] │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## Home Screen Layout

```
┌─────────────────────────────────────────┐
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│ ┃        Home (Blue Header)         ┃  │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                                         │
│  Welcome to the App!                    │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Featured Content               │   │
│  │  This is your home screen...    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Quick Actions                  │   │
│  │  • View your profile            │   │
│  │  • Adjust settings              │   │
│  │  • Explore more features        │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Recent Activity                │   │
│  │  Check out your recent...       │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

## Profile Screen Layout

```
┌─────────────────────────────────────────┐
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│ ┃      Profile (Purple Header)      ┃  │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │          ┌─────┐                │   │
│  │          │ JD  │  Avatar         │   │
│  │          └─────┘                │   │
│  │        John Doe                 │   │
│  │   john.doe@example.com          │   │
│  └─────────────────────────────────┘   │
│                                         │
│  About                                  │
│  ┌─────────────────────────────────┐   │
│  │  Bio                            │   │
│  │  Mobile app enthusiast...       │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  Location: San Francisco, CA    │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  Joined: January 2024           │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Stats                                  │
│  ┌───────┐ ┌───────┐ ┌───────┐        │
│  │  42   │ │  256  │ │  189  │        │
│  │ Posts │ │Followers│Following│        │
│  └───────┘ └───────┘ └───────┘        │
│                                         │
└─────────────────────────────────────────┘
```

## Settings Screen Layout

```
┌─────────────────────────────────────────┐
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│ ┃      Settings (Green Header)      ┃  │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                                         │
│  Preferences                            │
│  ┌─────────────────────────────────┐   │
│  │ Push Notifications      [ON]    │   │
│  │ Receive notifications...        │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ Dark Mode              [OFF]    │   │
│  │ Use dark theme...               │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ Location Services       [ON]    │   │
│  │ Allow app to access...          │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Account                                │
│  ┌─────────────────────────────────┐   │
│  │ Change Password              ›  │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ Privacy Settings             ›  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Support                                │
│  ┌─────────────────────────────────┐   │
│  │ Help Center                  ›  │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ Report a Problem             ›  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  About                                  │
│  ┌─────────────────────────────────┐   │
│  │ Version: 1.0.0                  │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

## Component Hierarchy

```
App
├── HomeScreen
│   ├── Header (Blue)
│   ├── Welcome Text
│   └── Content Cards (3)
│
├── ProfileScreen
│   ├── Header (Purple)
│   ├── Profile Card
│   │   ├── Avatar
│   │   ├── Name
│   │   └── Email
│   ├── About Section (3 cards)
│   └── Stats Section (3 boxes)
│
├── SettingsScreen
│   ├── Header (Green)
│   ├── Preferences Section (3 toggles)
│   ├── Account Section (3 menu items)
│   ├── Support Section (3 menu items)
│   └── About Section (2 info items)
│
└── Navigation
    ├── Home Tab
    ├── Profile Tab
    └── Settings Tab
```

## State Management

```
App Component State:
└── currentScreen: 'home' | 'profile' | 'settings'

SettingsScreen Component State:
├── notifications: boolean
├── darkMode: boolean
└── location: boolean
```

## Navigation Flow

```
           ┌──────────┐
           │   App    │
           └────┬─────┘
                │
    ┌───────────┼───────────┐
    │           │           │
    ▼           ▼           ▼
┌────────┐  ┌─────────┐  ┌──────────┐
│  Home  │  │ Profile │  │ Settings │
└────────┘  └─────────┘  └──────────┘
    ▲           ▲           ▲
    │           │           │
    └───────────┴───────────┘
          Navigation Bar
         [🏠] [👤] [⚙️]
```

## File Dependencies

```
App.js
├── requires → screens/HomeScreen.js
├── requires → screens/ProfileScreen.js
├── requires → screens/SettingsScreen.js
└── requires → components/Navigation.js

Navigation.js
└── receives props from App.js
    ├── currentScreen
    └── onNavigate (callback)
```

## Styling Architecture

Each component has its own StyleSheet:
- Consistent color scheme across screens
- Card-based layout with elevation
- Responsive padding and spacing
- Modern shadow effects
- Clear visual hierarchy
