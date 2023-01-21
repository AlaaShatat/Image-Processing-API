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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const checkExist_1 = __importDefault(require("../helpers/checkExist"));
const request = (0, supertest_1.default)(index_1.default);
describe('Test endpoint Image response', () => {
    it('gets the api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/');
        expect(response.status).toBe(200);
    }));
    it('gets the image endpoint and the file not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/image?filename=alaa&height=50&width=50');
        expect(response.status).toBe(400);
    }));
    it('gets the image with missing information', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/image?height=50&width=50');
        expect(response.status).toBe(400);
    }));
    it('gets the image endpoint and change successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/image?filename=encenadaport&height=50&width=50');
        expect(response.status).toBe(200);
    }));
    it('delete the image from thumbs if exists and get the image endpoint and change successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const dstFile = path_1.default.join(__dirname, '../../assets/thumbs/encenadaport_50_50.jpg');
        if (yield (0, checkExist_1.default)(dstFile)) {
            yield fs_1.promises.unlink(dstFile);
        }
        const response = yield request.get('/api/image?filename=encenadaport&height=50&width=50');
        expect(response.status).toBe(200);
    }));
    it('gets the image endpoint and get from caching', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/image?filename=encenadaport&height=50&width=50');
        expect(response.status).toBe(200);
    }));
});
