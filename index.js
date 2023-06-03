const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const Post = require("./models/Posts");
const PORT = process.env.PORT || 4000
const DATABASE = process.env.DATABASE

const app = express();

mongoose.connect(DATABASE,{
    dbName: 'blog-site'});

app.get("/", async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
    console.log(posts)
})

app.listen(PORT, ()=>{
    console.log("Listening at 4000");
});