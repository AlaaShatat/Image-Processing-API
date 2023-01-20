import express from 'express';
const imageRoute = express.Router();

// controllers
import processImage from '../controllers/imageController';

// routes
imageRoute.get('/', (req, res): void => {
  res.status(200).send('please add the image information');
});

imageRoute.get('/image', processImage);

//module.exports = {imageRoute};
export default imageRoute;
