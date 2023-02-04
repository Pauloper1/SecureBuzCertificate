const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const morgan=require("morgan");


// app.post('/webhook', (req, res) => {
//     // get agent from request
//     let agent = new WebhookClient({request: req, response: res})    // create intentMap for handle intent
//     let intentMap = new Map();    // add intent map 2nd parameter pass function
//     intentMap.set('webhook-demo',handleWebHookIntent)    // now agent is handle request and pass intent map
//     agent.handleRequest(intentMap)
// })
// function handleWebHookIntent(agent){
//     agent.add("Hello I am Webhook demo How are you...")
// }

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "\\pages\\HTML\\signin.html");
});

app.get("/signup.html", (req,res)=>{
    res.sendFile(__dirname + "\\pages\\HTML\\signup.html");
});

app.get("/Dashboard.html", (req,res)=>{
    res.sendFile(__dirname + "\\pages\\HTML\\Dashboard.html");
});

app.get("/pages/Dashboard.html", (req,res)=>{
    res.sendFile(__dirname + "\\pages\\HTML\\Dashboard.html");
});


app.get("/pages/needs.html", (req,res)=>{
    res.sendFile(__dirname + "\\pages\\HTML\\needs.html");
});

app.get("/pages/user_form.html", (req,res)=>{
    res.sendFile(__dirname + "\\pages\\HTML\\user_form.html");
});


const BUser = {
    email:"BU@gamil.com",
    passwd:"1234"
}
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

app.post('/webhook', (req, res) => {
    // get agent from request
    let agent = new WebhookClient({request: req, response: res})    // create intentMap for handle intent
    let intentMap = new Map();    // add intent map 2nd parameter pass function
    intentMap.set('Temp',handleWebHookIntent)    // now agent is handle request and pass intent map
    agent.handleRequest(intentMap)
})
function handleWebHookIntent(agent){
    agent.add("Hello I am Webhook demo How are you...")
}

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