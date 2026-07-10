import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { authLimiter } from '../middlewares/rateLimiter.js';
import { registerRules, loginRules, validate } from '../middlewares/validator.js';

const router = express.Router();

// Apply rate limiting middleware to prevent login/registration spamming
router.use(authLimiter);

// Define authentication routes with validation rules
router.post('/register', registerRules, validate, registerUser);
router.post('/login', loginRules, validate, loginUser);

export default router;
