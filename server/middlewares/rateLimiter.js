import rateLimit from 'express-rate-limit';

// 1. Define URL creation rate limiter (100 links per 24 hours)
const actualUrlLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 100,
  message: {
    status: 'error',
    message: 'Too many links created from this IP. Please try again tomorrow. (Limit: 100 links/day)'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// 2. Define Auth rate limiter (15 requests per 15 minutes)
const actualAuthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: {
    status: 'error',
    message: 'Too many authentication attempts from this IP. Please try again in 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

/**
 * Conditional Wrapper: Bypasses URL creation rate limiting in development mode
 */
export const urlCreationLimiter = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    // Logging this to help you verify that rate limiting is bypassed during local development
    console.log(`[Rate Limiter] Bypassed URL creation check in development environment`);
    return next();
  }
  return actualUrlLimiter(req, res, next);
};

/**
 * Conditional Wrapper: Bypasses Auth rate limiting in development mode
 */
export const authLimiter = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Rate Limiter] Bypassed Auth check in development environment`);
    return next();
  }
  return actualAuthLimiter(req, res, next);
};
