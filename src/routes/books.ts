import express from 'express';
import { getBooks, getBook, createBook, updateBook, deleteBook } from '../controllers/bookController';

const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.post('/books', createBook);
router.patch('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
