import Path from 'path';
import checkExist from './checkExist';
import sharpResize from '../utilities/sharpResize';
// resizing function
const convertSize = async (
  name: string,
  width: number,
  height: number,
  dstPath: string
): Promise<boolean> => {
  const srcPath: string = Path.join(
    __dirname,
    '../../assets/src/' + name + '.jpg'
  );
  if (await checkExist(srcPath)) {
    await sharpResize(srcPath, width, height, dstPath);
    return true;
  } else {
    return false;
  }
};
export default convertSize;
