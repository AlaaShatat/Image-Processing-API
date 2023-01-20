// this is the image controller
import express from 'express';
const {promises: FS} = require('fs');
const Path = require('path');

const{checkExist, convertSize} = require('../helpers/imageHelper');
// exports
exports.processImage = async (
  req: express.Request,
  res: express.Response,) =>{
    let filename: string = req.query.filename?req.query.filename.toString(): "null";
    let width: number = req.query.height?Number(req.query.width): -1;
    let height: number = req.query.height?Number(req.query.height): -1;

    // missing information
    if (filename=="null" || height<=0 || Number.isNaN(height) || width <=0 || Number.isNaN(width)){
      res.status(400).send({'error': "Sorry wrong information"});  
    }

    // continue processing
    else{
      // check thumbs first
      let resizedImage: string = filename+'_'+ width+ '_'+ height;
      const dstPath: string = Path.join(__dirname, '../../assets/thumbs/'+resizedImage+'.jpg');
      if (await checkExist(dstPath)){
        console.log(' the processed Image already exists, return the photo');
        res.status(200).send('return form caching');
      }
      // if not found
      else{
        console.log('continue resizing');
        if (await convertSize(filename, width, height, dstPath)){
          res.status(200).send({'filename': filename, 'width': width, 'height': height});
        }
        else{
          res.status(400).send('no photo with this name');
        }
          
      }
  
    }  
};