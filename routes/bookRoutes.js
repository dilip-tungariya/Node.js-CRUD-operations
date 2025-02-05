const router = require('express').Router();
const { get, create, update, deleteDoc } = require('../controllers/booksController');

router.get('/', get);
router.post('/', create);
router.patch('/:documentId', update);
router.delete('/:documentId', deleteDoc);

module.exports = router;