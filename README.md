# Vaulta Wallet – Fullstack Crypto Wallet App 🚀

Welcome to the **Vaulta Wallet** project! Vaulta is a modern, secure, and user-friendly crypto wallet solution, built with a robust Node.js/Express/MongoDB backend and a beautiful React Native (Expo) mobile frontend. This project helps you store, manage, and explore your digital assets with confidence and ease.

---

## ✨ Features

- **Secure Crypto Storage**: Industry-standard security for your assets
- **Easy Wallet Setup**: Create/import wallet in seconds
- **Multi-Asset Support**: Manage multiple cryptocurrencies
- **Fast & Intuitive UI**: Smooth onboarding and navigation
- **Cross-Platform**: Android support
- **Modern Design**: Clean, responsive, and beautiful interface
- **User Authentication**: Secure login/register with JWT
- **RESTful API**: Robust backend for wallet, user, and asset management

---

## 🛠️ Tech Stack

### Frontend (Mobile)
- **React Native** (Expo)
- **TypeScript**
- **NativeWind** for styling
- **Expo Router** for navigation
- **Custom Theming** (see `src/theme/`)

### Backend (API)
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose ODM)
- **JWT Authentication**
- **RESTful API Design**

---

## 📁 Folder Structure

```
vaulta-wallet/
├── apps/
│   ├── backend/           # Node.js/Express API
│   │   ├── src/
│   │   │   ├── config/        # DB config
│   │   │   ├── controllers/   # Route controllers
│   │   │   ├── middleware/    # Auth, error handling
│   │   │   ├── models/        # Mongoose models
│   │   │   ├── routes/        # Express routes
│   │   │   └── utils/         # Helper functions
│   │   ├── package.json
│   │   └── ...
│   └── mobile/            # React Native app (Expo)
│       ├── src/
│       │   ├── app/           # Screens & routing
│       │   ├── assets/        # Images & fonts
│       │   ├── components/    # UI components
│       │   ├── constants/     # App constants
│       │   ├── hooks/         # Custom hooks
│       │   └── theme/         # Colors, typography, spacing
│       ├── package.json
│       └── ...
├── libs/                  # Shared libraries
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-org/vaulta-wallet.git
cd vaulta-wallet
```

### 2. Setup the Backend (API)
```bash
cd apps/backend
npm install
# Create a .env file (see .env.example) and set your MongoDB URI and JWT secret
npm run dev
```
- The backend will run on `http://localhost:5000` by default.

### 3. Setup the Mobile App (Frontend)
```bash
cd ../mobile
npm install
npx expo start
```
- Scan the QR code with Expo Go (Android/iOS) or use an emulator/simulator.
- The app will connect to the backend API (update API URL in your config if needed).

---

## 🧭 Key Screens & API Endpoints

### Mobile App
- **Splash Screen**: Animated brand intro
- **Welcome**: Onboarding, features, and quick start
- **Wallet Setup**: Create/import wallet
- **Main Tabs**: Explore, manage, and send assets

### Backend API
- `POST /api/auth/register` – Register user
- `POST /api/auth/login` – Login user
- `GET /api/wallet` – Get wallet info
- `POST /api/wallet` – Create/import wallet
- `GET /api/assets` – List supported assets
- ...and more (see `apps/backend/src/routes/`)

---

## 🤝 Contributing

We welcome contributions! To get started:

1. Fork this repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push and open a Pull Request

---

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [NativeWind Docs](https://www.nativewind.dev/)
- [Expo Router](https://expo.github.io/router/docs/)
- [Express.js Docs](https://expressjs.com/)
- [MongoDB Docs](https://www.mongodb.com/docs/)

---

## 💬 Community & Support

- [Expo Discord](https://chat.expo.dev)

---

**Made with ❤️ by the Vaulta Wallet Team**
