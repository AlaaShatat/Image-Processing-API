import express from 'express';
const app = express();

// import routes
const imageRoute = require('./routes/image'); 
let port: number = 8000;

// initialize server
app.listen(port, ()=>{
    console.log("server is running");
});
app.use('/api', imageRoute);

export default app;