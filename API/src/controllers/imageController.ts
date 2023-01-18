// this is the image controller
import express from 'express';

exports.Image = (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  res.send('hello from controleer');
  next();
};
