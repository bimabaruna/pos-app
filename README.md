# pos-app

This is a [React Native](https://reactnative.dev/) mobile application built with [Expo](https://expo.dev/). The application primarily functions as a wrapper for a web application, displaying it within a `WebView`.

## Getting Started

To get started with the project, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Variables:**

    Create a `.env` file in the root of the project and add the following variables:

    ```
    DEV_URL=your_development_url
    PROD_URL=your_production_url
    ```

3.  **Run the application:**
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

## Built With

*   [React Native](https://reactnative.dev/)
*   [Expo](https://expo.dev/)
*   [TypeScript](https://www.typescriptlang.org/)