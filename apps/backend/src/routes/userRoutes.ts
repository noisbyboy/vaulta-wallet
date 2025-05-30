// src/routes/userRoutes.ts
import { Router } from 'express';
import { protect } from '../middleware/authMiddleware';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Rute ini sekarang dilindungi
router.get('/profile', protect, getUserProfile);

export default router;