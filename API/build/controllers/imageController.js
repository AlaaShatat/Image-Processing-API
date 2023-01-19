"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = (req, res, next) => {
    res.send('hello from controleer');
    next();
};
