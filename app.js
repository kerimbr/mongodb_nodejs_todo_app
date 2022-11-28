const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');



// Import Routers
const todosRoute = require('./routers/TodoRouter');

// Initialize App
const app = express();
app.use(bodyParser.json());


// API Home Route
app.get('/',(req,res)=>{
    res.send('Todo API');
});

// Route Middlewares
// Todos Route
app.use('/todo',todosRoute);


//Connect MongoDb
mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log("Connected  MongoDB");
});


// Start Listening Server
app.listen(process.env.PORT || 5000);
