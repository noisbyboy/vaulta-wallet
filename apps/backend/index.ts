// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/database';
import userRoutes from './src/routes/userRoutes';

// Konfigurasi dotenv untuk memuat .env
dotenv.config();

// Koneksi ke database
connectDB();

const app = express();

// Middleware agar Express bisa membaca body JSON
app.use(express.json());

// Rute utama
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Gunakan router dari file lain
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));