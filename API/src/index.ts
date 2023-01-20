import express from 'express';
const app = express();

// import routes
import imageRoute from './routes/image';
const port = 8000;

// initialize server
app.listen(port, () => {
  console.log('server is running');
});
app.use('/api', imageRoute);

export default app;
