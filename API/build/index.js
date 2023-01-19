"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// import routes
const imageRoute = require('./routes/image');
let port = 8000;
// initialize server
app.listen(port, () => {
    console.log('server is running');
});
app.use('/api', imageRoute);
exports.default = app;
