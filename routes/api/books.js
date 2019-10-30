const router = require('express').Router();
const booksController = require('../../controller/booksController');

// /API/BOOKS ROUTE
router.route('/')
    .get(booksController.findAll)
    .post(booksController.create);

// /API/BOOKS/:ID ROUTE
router.route('/:id')
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;