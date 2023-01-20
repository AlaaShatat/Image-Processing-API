"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { promises: FS } = require('fs');
const sharp = require('sharp');
const Path = require('path');
// resizing function
const convertSize = (name, width, height, dstPath) => __awaiter(void 0, void 0, void 0, function* () {
    const srcPath = Path.join(__dirname, '../../assets/src/' + name + '.jpg');
    if (yield checkExist(srcPath)) {
        yield sharp(srcPath).resize(width, height).toFile(dstPath);
        return true;
    }
    else {
        return false;
    }
});
// check caching function
const checkExist = (path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield FS.access(path);
        return true;
    }
    catch (_a) {
        return false;
    }
});
//exports
module.exports = { convertSize, checkExist };
