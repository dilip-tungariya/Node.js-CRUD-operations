require('dotenv').config();
const { getAllDocuments, createDocument, updateDocument, deleteDocument } = require('../firebase/firebase-methods');

// get method for getting all books from a collection in firebase
const getAllBooksData = async (req, res) => {
    try {
        getAllDocuments(process.env.FireBase_CollectionName)
            .then((result) => {
                const books = [];
                result.forEach((doc) => {
                    books.push(doc.data());
                });
                res.status(200).send({
                    statusCode: res.statusCode,
                    message: books.length > 0 ? 'Data found' : 'No data found!',
                    data: books
                });
            });
    } catch (err) {
        res.status(400).send({ statusCode: res.statusCode, message: err.message });
    }
}

// create method for creating single or multiple books from a collection in firebase
const createBookInFireBase = async (req, res) => {
    try {
        let books = [];
        if (!Array.isArray(req.body)) {
            books.push(req.body);
        } else {
            books = req.body;
        }
        createDocument(process.env.FireBase_CollectionName, books)
            .then((result) => {
                res.status(200).send({
                    statusCode: res.statusCode,
                    message: books.length > 0 ? 'Documents created successfully' : 'Document created successfully',
                    data: result
                });
            }).catch((err) => {
                res.status(400).send({ statusCode: res.statusCode, message: err.message });
            });
    } catch (err) {
        res.status(400).send({ statusCode: res.statusCode, message: err.message });
    }
}

// update method for updating single book data in firebase
const updateBookInFireBase = async (req, res) => {
    try {
        updateDocument(process.env.FireBase_CollectionName, req.params.bookId, req.body)
            .then((result) => {
                res.status(200).send({
                    statusCode: res.statusCode,
                    message: result
                });
            }).catch((err) => {
                res.status(400).send({ statusCode: res.statusCode, message: err.message });
            });
    } catch (err) {
        res.status(400).send({ statusCode: res.statusCode, message: err.message });
    }
}

// delete method for deleting book in firebase
const deleteBookInFireBase = async (req, res) => {
    try {
        deleteDocument(process.env.FireBase_CollectionName, req.params.bookId)
            .then((result) => {
                res.status(200).send({
                    statusCode: res.statusCode,
                    message: result
                });
            }).catch((err) => {
                res.status(400).send({ statusCode: res.statusCode, message: err.message });
            });
    } catch (err) {
        res.status(400).send({ statusCode: res.statusCode, message: err.message });
    }
}

module.exports = {
    get: getAllBooksData,
    create: createBookInFireBase,
    update: updateBookInFireBase,
    deleteDoc: deleteBookInFireBase
}