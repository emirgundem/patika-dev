const express = require('express');
const port = 5000;
const app = express();



app.get('/',(req,res)=>{
    res.status(200).send('Index Page');
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.get('/contact',(req,res)=>{
    res.status(200).send('Contact Page');

})

app.get('*',(req,res)=>{
    res.status(404).send('Page Not Found');
})


app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})


