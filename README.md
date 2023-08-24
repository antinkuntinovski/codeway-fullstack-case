# FULLSTACK CASE -CODEWAY

## Overview

A web application for managing configuration files with authentication and real-time updates.

## Prerequisites

- Node.js (v14 or later)
- Firebase project with authentication and Firestore database setup

## Installation

1. Clone the repository: `git clone https://gitlab.com/codeway2/FullstackCase.git`
2. Navigate to the project folder: `cd FullstackCase`
3. Install frontend dependencies: `cd frontend && npm install`
4. Install backend dependencies: `cd backend && npm install`

## Usage

1. Start the frontend development server: `cd frontend && npm run serve`
2. Start the backend server: `cd backend && npm start`
3. Access the application in your browser at `http://localhost:8080`

## Frontend

### Technologies Used

- Vue.js (v3)
- Vue Router
- Vuex
- Axios
- Firebase Authentication

### Features

- User registration and login
- View, edit, add, and delete configuration parameters
- Real-time updates with Firebase Firestore

### Getting Started
#### Start Client
1. Clone the repository: `git clone https://gitlab.com/codeway2/FullstackCase.git`
2. Navigate to the frontend folder: `cd FullstackCase && cd frontend`
3. Install dependencies: `npm install`
4. Start the development server: `npm run serve`
#### Start server
1. Get to the root directory of the project (FullstackCase) i.e. `cd ..`
2. Navigate to the backend folder: `cd server`
3. Install dependencies: `npm install`
4. Start the server (preferably using nodemon): `nodemon server`

### Troubleshooting
- If the server fails to start, check port 3000. If it is active either kill the process running there or change the port the server uses.
- If the client fails to start, check port 8080. Client will automatically be run on the next available port (i.e. 8081)
