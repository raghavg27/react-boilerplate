# 🚀 My React Boilerplate

Welcome to the **My React Boilerplate**! This project is designed as a starting point for building modern React applications, incorporating essential tools and libraries such as React Router, Redux, Tailwind CSS, Material-UI, React Hook Form, Axios for API calls, and Framer Motion for animations. It is structured to provide a scalable and maintainable architecture for real-world applications.

## 📝 Table of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
- [Folder Structure](#-folder-structure)
- [Available Scripts](#-available-scripts)
- [Technologies Used](#-technologies-used)
- [Project Configuration](#-project-configuration)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **React 18** with hooks and functional components
- **React Router v6** for client-side routing
- **Redux Toolkit** for state management
- **Tailwind CSS** for utility-first styling
- **Material-UI (MUI)** for component-based styling
- **React Hook Form** for form management and validation
- **Axios** for making API calls
- **Framer Motion** for animations
- **Authentication Context** to handle user login/logout
- **Custom Hooks** for encapsulating reusable logic
- **Responsive Layout** with Mobile-First design principles

## 🚀 Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js** (>= 14.x)
- **npm** (>= 6.x) or **yarn** (>= 1.x)
- **Git**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/raghavg27/react-boilerplate.git
   cd react-boilerplate
    ```


2. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Run the development server**:

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

## 📁 Folder Structure

The project is organized into a modular folder structure for scalability and maintainability:

```plaintext
my-react-boilerplate/
├── public/                     # Public assets
├── src/                        # Source files
│   ├── assets/                 # Images, fonts, etc.
│   ├── components/             # Reusable components
│   │   ├── common/             # Common reusable components
│   │   ├── forms/              # Form components
│   │   ├── layout/             # Layout components (e.g., NavBar)
│   │   └── UI/                 # UI components (e.g., buttons, modals)
│   ├── contexts/               # Context providers (e.g., AuthContext)
│   ├── hooks/                  # Custom hooks
│   ├── pages/                  # Page components
│   ├── redux/                  # Redux slices and store configuration
│   │   ├── slices/             # Redux slices
│   │   └── store.js            # Redux store setup
│   ├── services/               # API services and utility functions
│   ├── App.jsx                 # Main App component
│   ├── index.css               # Global styles
│   ├── index.jsx               # Entry point
│   └── theme.js                # Material-UI theme configuration
└── package.json                # Project configuration and scripts
```

## 📜 Available Scripts

In the project directory, you can run:

- **`npm run dev`** or **`yarn dev`**: Runs the app in development mode.
- **`npm run build`** or **`yarn build`**: Builds the app for production.
- **`npm run lint`** or **`yarn lint`**: Runs ESLint for code linting.
- **`npm run format`** or **`yarn format`**: Formats the code using Prettier.

## 🛠 Technologies Used

- **React 18**: JavaScript library for building user interfaces.
- **React Router v6**: For routing and navigation.
- **Redux Toolkit**: Simplified state management.
- **Tailwind CSS**: Utility-first CSS framework.
- **Material-UI (MUI)**: React UI framework.
- **React Hook Form**: Form handling and validation.
- **Axios**: Promise-based HTTP client.
- **Framer Motion**: Animation library for React.
- **ESLint** and **Prettier**: For code quality and formatting.

## ⚙️ Project Configuration

### Environment Variables

Create a `.env` file in the root directory to configure environment variables:

```plaintext
REACT_APP_API_BASE_URL=https://api.example.com
REACT_APP_SOME_OTHER_ENV=your-value
```

### API Services

API services are defined in the `src/services/` directory. Modify these files to adjust API calls as per your backend requirements.

### Authentication

The authentication logic is handled via the `AuthContext`. You can find and modify the context and its provider in `src/contexts/AuthContext.jsx`.

## 🤝 Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

Please make sure to update tests as appropriate and adhere to the code style used throughout the project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

