// this is the image controller
import express from 'express';
import Path from 'path';
import convertSize from '../helpers/convertSize';
import checkExist from '../helpers/checkExist';
// exports
const processImage = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const filename: string = req.query.filename
    ? req.query.filename.toString()
    : 'null';
  const width: number = req.query.height ? Number(req.query.width) : -1;
  const height: number = req.query.height ? Number(req.query.height) : -1;

  // missing information
  if (
    filename == 'null' ||
    height <= 0 ||
    Number.isNaN(height) ||
    width <= 0 ||
    Number.isNaN(width)
  ) {
    res.status(400).send({ error: 'Sorry wrong information' });
  }

  // continue processing
  else {
    // check thumbs first
    const resizedImage: string = filename + '_' + width + '_' + height;
    const dstPath: string = Path.join(
      __dirname,
      '../../assets/thumbs/' + resizedImage + '.jpg'
    );
    const flag: boolean = await checkExist(dstPath);
    if (flag) {
      res.status(200).sendFile(dstPath);
    }
    // if not found
    else {
      if (await convertSize(filename, width, height, dstPath)) {
        res.status(200).sendFile(dstPath);
      } else {
        res.status(400).send('no photo with this name');
      }
    }
  }
};
export default processImage;
