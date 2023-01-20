import  sharp from 'sharp';
import Path from 'path';
import checkExist from './checkExist';
// resizing function
const convertSize = async (
    name: string,
    width: number,
    height: number,
    dstPath: string
  ): Promise<boolean> => {
    const srcPath = Path.join(__dirname, '../../assets/src/' + name + '.jpg');
    if (await checkExist(srcPath)) {
      await sharp(srcPath).resize(width, height).toFile(dstPath);
  
      return true;
    } else {
      return false;
    }
  };
  export default convertSize;