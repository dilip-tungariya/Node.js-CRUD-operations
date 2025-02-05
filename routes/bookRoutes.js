const router = require('express').Router();
const { get, create, update, deleteDoc } = require('../controllers/booksController');

router.get('/', get);
router.post('/', create);
router.put('/:bookId', update);
router.delete('/:bookId', deleteDoc);

module.exports = router;