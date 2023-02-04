const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose=require("mongoose");
// const morgan=require("morgan");


const app = express(); 

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

app.get("/Dashboard.html", (req,res)=>{
   res.sendFile(__dirname + "/pages/HTML/Dashboard.html");
});

app.get("/pages/status.html", (req,res)=>{
   res.sendFile(__dirname + "/pages/HTML/status.html");
});

app.get("/pages/HTML/underScrutiny.html", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/underScrutiny.html");
});


app.get("/pages/needs.html", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/needs.html");
});

app.get("/pages/user_form.html", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/user_form.html");
});



app.listen(5000, ()=>{
    console.log("Server started Running!");
});




// New
// mongoose.connect('mongodb://localhost:5000/testdb',{userNewUrlParser: true, unifiedTopology:true})
// const db= mongoose.connection
//  db.on('error',(err) => {
//     console.log(err)
//  })

//  db.once('open', ()=>{
//     console.log('Database connecttion done')
//  }) 

// const app = express()

// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

// const PORT = process.env.PORT || 3000

// app.listen(PORT , ()=>{
//     console.log('Server running on port ${PORT} ')
// })