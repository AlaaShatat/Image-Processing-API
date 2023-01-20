import { promises as FS } from 'fs';

// check caching function
const checkExist = async (path: string): Promise<boolean> => {
  try {
    await FS.access(path);
    return true;
  } catch {
    return false;
  }
};
//exports
export default checkExist;
