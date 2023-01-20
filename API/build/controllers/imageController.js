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
const path_1 = __importDefault(require("path"));
const convertSize_1 = __importDefault(require("../helpers/convertSize"));
const checkExist_1 = __importDefault(require("../helpers/checkExist"));
// exports
const processImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename
        ? req.query.filename.toString()
        : 'null';
    const width = req.query.height ? Number(req.query.width) : -1;
    const height = req.query.height ? Number(req.query.height) : -1;
    // missing information
    if (filename == 'null' ||
        height <= 0 ||
        Number.isNaN(height) ||
        width <= 0 ||
        Number.isNaN(width)) {
        res.status(400).send({ error: 'Sorry wrong information' });
    }
    // continue processing
    else {
        // check thumbs first
        const resizedImage = filename + '_' + width + '_' + height;
        const dstPath = path_1.default.join(__dirname, '../../assets/thumbs/' + resizedImage + '.jpg');
        const flag = yield (0, checkExist_1.default)(dstPath);
        if (flag) {
            res.status(200).sendFile(dstPath);
        }
        // if not found
        else {
            if (yield (0, convertSize_1.default)(filename, width, height, dstPath)) {
                res.status(200).sendFile(dstPath);
            }
            else {
                res.status(400).send('no photo with this name');
            }
        }
    }
});
exports.default = processImage;
