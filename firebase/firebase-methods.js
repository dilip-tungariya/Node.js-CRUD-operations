// Import db method from firebase-connection.js for connection pooling
const { db } = require('./firebase-connection');
const { query, getDocs, collection, doc, addDoc, updateDoc, deleteDoc } = require('firebase/firestore');

// To Fetch all documents
async function getAllDocuments(collectionName) {
    try {
        const q = query(collection(db, collectionName));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return [];
        } else {
            return snapshot;
        }
    } catch (err) {
        return { Error: err.message };
    }
}

// To create document
async function createDocument(collectionName, documents) {
    return new Promise((resolve, reject) => {
        try {
            const promises = documents.map(async (data) => {
                const docRef = await addDoc(collection(db, collectionName), data);
                return { bookId: docRef.id, ...data };
            });
            Promise.all(promises)
                .then((books) => {
                    resolve(books);
                });
        } catch (err) {
            reject(err);
        }
    });
}

// To update document
async function updateDocument(collectionName, documentId, data) {
    return new Promise((resolve, reject) => {
        try {
            const docRef = doc(db, collectionName, documentId);
            updateDoc(docRef, data)
                .then(() => {
                    resolve('Book updated successfully');
                });
        } catch (err) {
            reject(err);
        }
    });
}

// To delete document
async function deleteDocument(collectionName, documentId) {
    return new Promise((resolve, reject) => {
        try {
            const docRef = doc(db, collectionName, documentId);
            deleteDoc(docRef)
                .then(() => {
                    resolve('Book deleted successfully');
                });
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = { getAllDocuments, createDocument, updateDocument, deleteDocument }