# Node.js CRUD Operations

## Description

This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using Node.js and Firebase. It provides a simple API to manage data stored in a Firebase database.

## Features

- **Express.js**: Handles HTTP requests and routing.
- **Firebase**: Serves as the database for storing and retrieving data.
- **Dotenv**: Manages environment variables securely.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- A Firebase account with a configured project

## Installation

1. **Clone the repository**:

   git clone https://github.com/dilip-tungariya/Node.js-CRUD-operations-FireBase-FireStore.git

   cd Node.js-CRUD-operations

2. **Install dependencies**:
    npm install

3. **Configure environment variables**:

    a) Create a .env file in the root directory

    b) Add your Firebase configuration details to the .env file:

        FIREBASE_API_KEY=your_api_key

        FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com

        FIREBASE_PROJECT_ID=your_project_id

        FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com

        FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id

        FIREBASE_APP_ID=your_app_id

    Note: Replace the placeholders with actual Firebase project details

4. **Start the application**:

    npm start

    Note: The server will run on http://localhost:3000

## API Endpoints

    Method	        Endpoint	                Description
    GET             /api/books	                Retrieve all books
    POST	        /api/books	                Create a new book
    PUT             /api/books/:bookId	        Update an book by ID
    DELETE	        /api/books/:bookId	        Delete an book by ID

## Project Structure

    Node.js-CRUD-operations/
    ├── bin/
    │   └── www                         # Server entry point
    ├── controllers/
    │   └── booksController.js          # Controller for book operations
    ├── firebase/
    │   └── firebase-connection.js      # Firebase configuration
    │   └── firebase-methods.js         # Firebase functions
    ├── routes/
    │   └── bookRoutes.js               # API routes
    ├── .env                            # Environment variables
    ├── .gitignore
    ├── app.js                          # Application setup
    ├── package.json
    └── README.md
