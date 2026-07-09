import express from 'express';
import { getAiAliases, getAiInsights } from '../controllers/aiController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Apply JWT authentication protection middleware to all AI endpoints
router.use(protect);

router.post('/aliases', getAiAliases);
router.post('/insights', getAiInsights);

export default router;
