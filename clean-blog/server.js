const express = require('express');
const ejs = require('ejs');
const ejslint = require('ejs-lint');
const path = require('path');
const port = 3000;
const app = express();


//Template Engine
app.set("view engine","ejs");


//Mıddleware

app.use(express.static('public'));

//ROUTES

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/add',(req,res)=>{
    res.render('add')
})





app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})