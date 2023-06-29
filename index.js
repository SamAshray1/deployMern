const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const Post = require("./models/Posts");
const PORT = process.env.PORT || 4000
const DATABASE = process.env.DATABASE
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(DATABASE,{
    dbName: 'blog-site'});

app.get("/", async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
    // console.log(posts)
})

app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
});

app.listen(PORT, ()=>{
    console.log("Listening at 4000");
});