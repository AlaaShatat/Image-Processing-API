import sharp from 'sharp';

const sharpResize = async (
  srcPath: string,
  width: number,
  height: number,
  dstPath: string
): Promise<void> => {
  await sharp(srcPath).resize(width, height).toFile(dstPath);
};

export default sharpResize;
