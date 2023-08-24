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
- Firebase Firestore Databse
- Runs on port 3000
  
### Frontend (Vue.js)

- Vue.js: A progressive JavaScript framework for building user interfaces.
- Vuex: A state management library for Vue.js applications.
- Vue Router: A routing library for Vue.js applications.
- Axios: A promise-based HTTP client for making API requests.
- Firebase Authentication: Provides secure user authentication.
- Runs on port 8080

## Firebase Overview
Link: https://console.firebase.google.com/u/2/project/codewayfullstackcase/overview
There is a collection named "configFiles" in the database and that is the one being used in the project.
There is a single document with an auto generated id and various property and value pairs.
Here's the document schema: 
[
  {
    id: 'z5vJ2coDnhUQZeeUb5ju',
    btnText: 'Try Now!',
    minimumVersion: '1.01',
    latestVersion: '2.11',
    privacyPage: 'https://codeway.com/privacy_en.html',
    supportEmail: 'support@codeway.co',
    compressionQuality: '0.9',
    freeUsageLimit: '7'
  }
]

## Backend Setup

1. Clone the repository to your local machine.
2. Navigate to the backend directory: `cd server`.
3. Install dependencies: `npm install`.
4. Make sure you have Firebase Admin SDK service account JSON. (i.e. `codewayfullstackcase-firebase-adminsdk-juy9q-cf7c6ec395.json`)
5. Start the backend server: `npm start`.

## Frontend Setup

1. Navigate to the frontend directory: `cd frontend`.
2. Install dependencies: `npm install`.
3. Make sure you have the correct Firebase configuration in `src/firebase/index.js`
4. Start the frontend development server: `npm run serve`.

## Usage

1. Open your web browser and navigate to `http://localhost:8080` (or as indicated in the terminal).
2. Sign in using either (email: codeway@codeway.co , password: codeway) or (email: test@test.com , password: testpassword)
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

##TROUBLESHOOTING
- Check the needed ports are empty (3000 for the backend and 8080 for the frontend)
- If they are being used by another process, either kill that process or change the projects ports
- Restart the project

## PURPOSE
This project is developed for the case study given by Codeway to Ahmet Bahadır Özer. And the only person responsible for the development is solely him.
