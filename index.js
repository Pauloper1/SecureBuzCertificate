const express = require("express");

// const hbs=require("hbs");

const bodyParser = require("body-parser");

const app = express(); 

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "\\pages\\HTML\\signin.html");
});



app.listen(5000, ()=>{
    console.log("Server started Running!");
});