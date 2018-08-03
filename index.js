const path = require('path');
const express = require('express');
const expressEdge = require('express-edge');


const app = new express();

app.use(express.static('public'));
app.use(expressEdge);
app.set('views' , path.resolve(__dirname , 'views'));


app.get('/' , (request , response)=>{
    response.render('index');
})

app.get('/index.html' , (request , response)=>{
    response.sendFile(path.resolve(__dirname , 'pages/index.html'));
})

app.get('/about' , (request , response)=>{
    response.sendFile(path.resolve(__dirname , 'pages/about.html'));
})

app.get('/about.html' , (request , response)=>{
    response.sendFile(path.resolve(__dirname , 'pages/about.html'));
})

app.get('/contact' , (request , response)=>{
    response.sendFile(path.resolve(__dirname , 'pages/contact.html'));
})

app.get('/contact.html' , (request , response)=>{
    response.sendFile(path.resolve(__dirname , 'pages/contact.html'));
})

app.get('/post' , (request , response)=>{
    response.sendFile(path.resolve(__dirname , 'pages/post.html'));
})

app.get('/post.html' , (request , response)=>{
    response.sendFile(path.resolve(__dirname , 'pages/post.html'));
})




app.listen(4000,()=>{
    console.log('The App Listening On Port 4000');
})