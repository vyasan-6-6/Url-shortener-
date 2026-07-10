import express from 'express';
import { createShortUrl, getUserUrls, updateUrl, deleteUrl, getUrlQRCode } from '../controllers/urlController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { urlCreationLimiter } from '../middlewares/rateLimiter.js';
import { urlCreationRules, validate } from '../middlewares/validator.js';

const router = express.Router();

// All URL endpoints are private and require JWT authentication
router.use(protect); // Applies the 'protect' middleware to all routes defined below

router.post('/', urlCreationLimiter, urlCreationRules, validate, createShortUrl);
router.get('/', getUserUrls);
router.put('/:id', updateUrl);
router.delete('/:id', deleteUrl);
router.get('/:id/qrcode', getUrlQRCode);

export default router;
