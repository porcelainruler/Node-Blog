const path = require('path');
const express = require('express');
const expressEdge = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./database/models/Post')


const app = new express();

mongoose.connect('mongodb://localhost/node-blog');

app.use(express.static('public'));
app.use(expressEdge);
app.set('views' , path.resolve(__dirname , 'views'));

app.use(bodyParser.json());             // for decoding the file send as json format fron browser
app.use(bodyParser.urlencoded({extended : true}));       // for decoding similar to above combined to have favourable result


app.get('/' , async (request , response)=>{

    const posts = await Post.find({})

    console.log(posts);

    response.render('index' , {
        posts
    });
})

app.get('/post/new' , (request , response)=>{
    response.render('create');
})

app.post('/posts/store' , (req , res) => {

    Post.create(req.body , (error , post) =>{
        res.redirect('/')
    })

})

app.get('/about' , (request , response)=>{
    response.render('about');
})


app.get('/contact' , (request , response)=>{
    response.render('contact');
})


app.get('/post/:id' , async (request , response)=>{

    const post = await Post.findById(request.params.id)
    response.render('post',{
        post
    });
})



app.listen(4000,()=>{
    console.log('The App Listening On Port 4000');
})