require('dotenv').config();
const { getAllDocuments, createDocument, updateDocument, deleteDocument } = require('../firebase/firebase-methods');

// get method for getting all documents from a collection in firebase
const getAllFireBaseData = async (req, res) => {
    try {
        getAllDocuments(process.env.FireBase_CollectionName)
            .then((result) => {
                const documents = [];
                result.forEach((doc) => {
                    documents.push(doc.data());
                });
                res.status(200).send({
                    statusCode: res.statusCode,
                    message: documents.length > 0 ? 'Data found' : 'No data found!',
                    data: documents
                });
            });
    } catch (err) {
        res.status(400).send({ statusCode: res.statusCode, message: err.message });
    }
}

// create method for creating single or multiple documents from a collection in firebase
const createDocumentInFireBase = async (req, res) => {
    try {
        let documents = [];
        if (!Array.isArray(req.body)) {
            documents.push(req.body);
        } else {
            documents = req.body;
        }
        createDocument(process.env.FireBase_CollectionName, documents)
            .then((result) => {
                res.status(200).send({
                    statusCode: res.statusCode,
                    message: documents.length > 0 ? 'Documents created successfully' : 'Document created successfully',
                    data: result
                });
            }).catch((err) => {
                res.status(400).send({ statusCode: res.statusCode, message: err.message });
            });
    } catch (err) {
        res.status(400).send({ statusCode: res.statusCode, message: err.message });
    }
}

// update method for updating single document data in firebase
const updateDocumentInFireBase = async (req, res) => {
    try {
        updateDocument(process.env.FireBase_CollectionName, req.params.documentId, req.body)
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

// delete method for deleting document in firebase
const deleteDocumnetInFireBase = async (req, res) => {
    try {
        deleteDocument(process.env.FireBase_CollectionName, req.params.documentId)
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
    get: getAllFireBaseData,
    create: createDocumentInFireBase,
    update: updateDocumentInFireBase,
    deleteDoc: deleteDocumnetInFireBase
}