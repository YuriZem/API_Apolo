require('dotenv').config();
const express =require('express');
const router = require('./router')
const app = express();
const db = require('./models/conexao')
const cors=require("cors");

app.use (express.json())
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
 
app.use(router)

module.exports = app;