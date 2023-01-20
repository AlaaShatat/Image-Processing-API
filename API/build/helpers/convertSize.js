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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const checkExist_1 = __importDefault(require("./checkExist"));
// resizing function
const convertSize = (name, width, height, dstPath) => __awaiter(void 0, void 0, void 0, function* () {
    const srcPath = path_1.default.join(__dirname, '../../assets/src/' + name + '.jpg');
    if (yield (0, checkExist_1.default)(srcPath)) {
        yield (0, sharp_1.default)(srcPath).resize(width, height).toFile(dstPath);
        return true;
    }
    else {
        return false;
    }
});
exports.default = convertSize;
