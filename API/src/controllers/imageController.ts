// this is the image controller
import express from 'express';
const sharp = require('sharp');

// resizing function
const convertSize = (name:string, width: number, height: number) => {
  const path = __dirname.split('\\');
  const inputPath = path.slice(0,6).join('\\');
  let resizedImage: string = name+'_'+ height+ '_'+ width;  
  
  sharp(inputPath + '/assets/src/'+name+'.jpg')
  .resize(height, width) 
  .toFile(inputPath + '/assets/thumbs/'+resizedImage+'.jpg');
}
// check caching function
const checkExist =()=>{}
exports.processImage = (
  req: express.Request,
  res: express.Response,) =>
   {
    let filename: string = req.query.filename?req.query.filename.toString(): "null";
    let height: number = req.query.height?Number(req.query.height): -1;
    let width: number = req.query.height?Number(req.query.width): -1;
    
    // missing information
    if (filename=="null" || height <=0 || width <=0){
      res.status(200).send({'error': "Sorry wrong information"});  
    }
    else{
      // check if exists
      
      // if not 
      convertSize(filename, width, height);
      res.status(200).send({'filename': filename, 'height': height, 'width': width});

    }  
};

