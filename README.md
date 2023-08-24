# Codeway Fullstack Case

Welcome to Codeway Fullstack Case! This project showcases a full-stack web application built using Vue.js for the frontend and Node.js (Express) with Firebase for the backend. The application allows users to manage configuration files, providing features like editing, adding, and deleting properties in real-time.

## Features

- User Authentication: Secure user authentication using Firebase Authentication.
- Configuration File Management: View, edit, add, and delete properties in configuration files.
- Real-time Updates: Changes to configuration files are reflected in real-time using Firebase Firestore.
- Responsive Design: The application is responsive, offering a seamless experience on both desktop and mobile devices.

## Technologies Used

### Backend (Node.js and Express)

- Express: A fast, unopinionated, minimalist web framework for Node.js.
- Firebase Admin: Provides access to Firebase services on the server.
- Cors: Middleware for enabling Cross-Origin Resource Sharing.
  
### Frontend (Vue.js)

- Vue.js: A progressive JavaScript framework for building user interfaces.
- Vuex: A state management library for Vue.js applications.
- Vue Router: A routing library for Vue.js applications.
- Axios: A promise-based HTTP client for making API requests.
- Firebase Authentication: Provides secure user authentication.

## Backend Setup

1. Clone the repository to your local machine.
2. Navigate to the backend directory: `cd server`.
3. Install dependencies: `npm install`.
4. Replace the `codewayfullstackcase-firebase-adminsdk-juy9q-cf7c6ec395.json` file with your Firebase Admin SDK service account JSON.
5. Start the backend server: `npm start`.

## Frontend Setup

1. Navigate to the frontend directory: `cd frontend`.
2. Install dependencies: `npm install`.
3. Replace the Firebase configuration in `src/firebase/index.js` with your own Firebase configuration.
4. Start the frontend development server: `npm run serve`.

## Usage

1. Open your web browser and navigate to `http://localhost:8080` (or as indicated in the terminal).
2. Sign in using your Firebase account or create a new account.
3. In the HomeView, you can manage configuration files by editing, adding, or deleting properties.

## API Endpoints

### GET `/api/files`

- Fetches the list of configuration files from the Firebase Firestore.

### PATCH `/api/files/:id`

- Updates the properties of a configuration file in the Firebase Firestore.
- Supports editing, adding, and deleting properties in real-time.

## Deployment

### Backend

1. Build the production version: `npm run build`.
2. Deploy the backend to a hosting provider of your choice.

### Frontend

1. Build the production version: `npm run build`.
2. Upload the contents of the `dist` folder to your frontend hosting provider.

3. Set up Firebase Authentication and Firestore rules as needed for security.

## Contributing

Contributions to this project are welcome! If you find a bug, want to suggest an enhancement, or want to contribute in any way, feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

This README provides an overview of the project structure, setup instructions, features, and technologies used in both the frontend and backend. For detailed code explanations and implementation details, refer to the source code files.

For any questions or assistance, please contact [Your Name](mailto:your@email.com).

