import { body, validationResult } from 'express-validator';

// 1. Validation check collector middleware
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      message: errors.array()[0].msg // Returns the first validation failure message
    });
  }
  next();
};

// 2. User registration rules
export const registerRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

// 3. User login rules
export const loginRules = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

// 4. URL creation rules
export const urlCreationRules = [
  body('originalUrl')
    .trim()
    .notEmpty()
    .withMessage('Original destination URL is required')
    .isURL({ protocols: ['http', 'https'], require_protocol: true })
    .withMessage('Please provide a valid URL starting with http:// or https://'),
  body('customAlias')
    .optional({ checkFalsy: true })
    .trim()
    .isAlphanumeric('en-US', { ignore: '-_' })
    .withMessage('Custom alias can only contain alphanumeric characters, hyphens, and underscores')
    .isLength({ min: 3, max: 30 })
    .withMessage('Custom alias must be between 3 and 30 characters long'),
  body('expiresAt')
    .optional({ checkFalsy: true })
    .isISO8601()
    .withMessage('Expiration date must be a valid ISO 8601 date string')
];
