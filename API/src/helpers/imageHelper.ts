const {promises: FS} = require('fs');
const sharp = require('sharp');
const Path = require('path');

// resizing function
const convertSize = async (name:string, width: number, height: number, dstPath: string) :Promise<boolean> => {  
    const srcPath = Path.join(__dirname, '../../assets/src/'+name+'.jpg')
    if (await checkExist(srcPath)){
      console.log('photo exists');
      
      sharp(srcPath)
      .resize(width, height) 
      .toFile(dstPath);
      
      return true;
    }
    else{
      console.log('image not found');
      return false;
    }
    
  }
  // check caching function
const checkExist =async(path: string): Promise<boolean> =>{
    try{
      await FS.access(path);
      console.log("found the image")
      return true
    }
    catch{
      console.log('wasnt found');
      return false
    }
  }

//exports 
module.exports={convertSize, checkExist};