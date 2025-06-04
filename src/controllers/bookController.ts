import { Request, Response } from 'express';
import Book from '../models/Book';

export const getBooks = async (req: Request, res: Response): Promise<any> => {
  try {
    const books = await Book.find();
    return res.json({
      success: true,
      data: books,
      message: "Libros recuperados con éxito"
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Error al recuperar los libros"
    });
  }
};

export const getBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Libro no encontrado"
      });
    }
    return res.json({
      success: true,
      data: book,
      message: "Libro recuperado con éxito"
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Error al recuperar el libro"
    });
  }
};

export const createBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, author, publishedYear, genre } = req.body;
    const newBook = new Book({ title, author, publishedYear, genre });
    const savedBook = await newBook.save();

    return res.status(201).json({
      success: true,
      data: savedBook,
      message: "Libro creado con éxito"
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message || "Error al crear el libro"
    });
  }
};

export const updateBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Libro no encontrado"
      });
    }
    return res.json({
      success: true,
      data: updatedBook,
      message: "Libro actualizado con éxito"
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message || "Error al actualizar el libro"
    });
  }
};

export const deleteBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Libro no encontrado"
      });
    }
    return res.json({
      success: true,
      data: deletedBook,
      message: "Libro borrado con éxito"
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Error al borrar el libro"
    });
  }
};
