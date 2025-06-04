import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import bookRoutes from './routes/books';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/api', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
