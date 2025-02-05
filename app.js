const express = require('express');
// initilizing app for api server
const app = express();
// using middleware for getting json data from request body
app.use(express.json());
// for accessing api's from different origin
const cors = require('cors');
app.use(cors({ origin: '*' }));

const bookRoutes = require('./routes/bookRoutes');

app.use('/api/books', bookRoutes);

module.exports = app;