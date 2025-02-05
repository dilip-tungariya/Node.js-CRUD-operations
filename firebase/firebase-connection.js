// Import the functions we need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.FireBase_APIKey,
    authDomain: process.env.FireBase_AuthDomain,
    projectId: process.env.FireBase_ProjectId,
    storageBucket: process.env.FireBase_StorageBucket,
    messagingSenderId: process.env.FireBase_MessagingSenderId,
    appId: process.env.FireBase_AppId,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = { db };