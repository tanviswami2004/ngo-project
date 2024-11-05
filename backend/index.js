const express = require('express');
const app= express();
const bodyParser= require('body-parser');
const cors= require('cors');
const authrouter= require('./routes/authrouter');
require('dotenv').config();
require('./models/db')


const PORT = process.env.PORT || 8080;
app.get('/ping',req,res =>{
    res.setEncoding('PONG');
});
app.use(bodyParser.json());
app.use(cors());
app.use(' /auth',authrouter);
app.use(' /products',authrouter);


app.listen( PORT, () =>{
    console.log('server is running on ${PORT}');
    

})