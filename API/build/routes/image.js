"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageRoute = express_1.default.Router();
// controllers
const imageController_1 = __importDefault(require("../controllers/imageController"));
// routes
imageRoute.get('/', (req, res) => {
    res.status(200).send('please add the image information');
});
imageRoute.get('/image', imageController_1.default);
//module.exports = {imageRoute};
exports.default = imageRoute;
