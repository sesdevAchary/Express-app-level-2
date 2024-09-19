// to contain all the routes...

const express=require('express');
const router=express.Router();


const bookController=require('../controllers/bookController');


router.post('/books', bookController.createBook);
router.get('/books',bookController.getAllBooks);
router.get('/books/:id',bookController.getBookById);
router.delete('/books/:id',bookController.deleteBook);
router.put('/books/:id',bookController.updateBook);













module.exports=router;
