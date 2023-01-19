import express from 'express';
const router = express.Router();

// controllers
const { Image,processImage} = require('../controllers/imageController');

// routes
/*router.get('/image', Image, (req, res): void => {
  console.log('innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
});
*/

router.get('/image', processImage);

module.exports = router;
