# Project Overview

This is a [React Native](https://reactnative.dev/) mobile application built with [Expo](https://expo.dev/). The application primarily functions as a wrapper for a web application, displaying it within a `WebView`. The main entry point of the app is `app/index.tsx`, which loads a URL defined in the environment variables. The project uses TypeScript and file-based routing with `expo-router`.

# Building and Running

To get started with the project, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the application:**
    *   To start the development server, run:
        ```bash
        npx expo start
        ```
    *   To run on Android:
        ```bash
        npm run android
        ```
    *   To run on iOS:
        ```bash
        npm run ios
        ```
    *   To run on the web:
        ```bash
        npm run web
        ```

# Development Conventions

*   **File-based Routing:** The project uses `expo-router` for navigation. New screens can be created by adding files to the `app` directory.
*   **TypeScript:** The project is written in TypeScript. All new code should be written in TypeScript to maintain consistency.
*   **Environment Variables:** The application loads a URL from environment variables. Create a `.env` file in the root of the project and add the following variables:
    ```
    DEV_URL=your_development_url
    PROD_URL=your_production_url
    ```
    The `env.d.ts` file declares the types for these environment variables.
*   **Linting:** The project uses ESLint for code linting. Run `npm run lint` to check for linting errors.