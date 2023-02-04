const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose=require("mongoose");
// const morgan=require("morgan");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
// const morgan=require("morgan");

const app = express()

const dialogflow = require('@google-cloud/dialogflow').v2beta1;

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/signin.html");
});

app.get("/signup.html", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/signup.html");
});

app.get("/Dashboard.html", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/Dashboard.html");
});

app.get("/pages/HTML/underScrutiny.html", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/underScrutiny.html")});
app.get("/pages/Dashboard.html", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/Dashboard.html");
});
app.get("/pages/status.html", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/status.html");
});


app.get("/pages/needs.html", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/needs.html");
});

app.get("/pages/user_form.html", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/user_form.html");
});


app.post("/auth",(req,res)=>{
    console.log(req.body)
    if(req.body.email === BUser.email && req.body.passwd === BUser.passwd){
        res.sendFile(__dirname + "/pages/HTML/dashboard.html")
    }else{
        res.send(`
        <h1>wrong credentials</h1>
        `)
    }
})


app.listen(5000, ()=>{
    console.log("Server started Running!");
})
