import express from 'express';
const router = express.Router();

// controllers
const { Image } = require('../controllers/imageController');

// routes
router.get('/image', Image, (req, res): void => {
  console.log('innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
});

module.exports = router;
