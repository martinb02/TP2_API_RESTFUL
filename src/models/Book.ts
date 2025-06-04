import mongoose, { Schema } from 'mongoose';
import { IBook } from '../interfaces/IBook';

const BookSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: { type: Number },
  genre: { type: String },
  available: { type: Boolean, default: true }
});

export default mongoose.model<IBook>('Book', BookSchema);