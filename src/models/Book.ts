import mongoose, { Document, Schema } from 'mongoose';

interface IBook extends Document {
  title: string;
  author: string;
  publishedYear?: number;
  genre?: string;
  available: boolean;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: { type: Number },
  genre: { type: String },
  available: { type: Boolean, default: true }
});

export default mongoose.model<IBook>('Book', BookSchema);
