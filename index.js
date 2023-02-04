const express = require("express");
const {WebhookClient} = require('dialogflow-fulfillment')
const app = express(); 
// const hbs=require("hbs");

const bodyParser = require("body-parser");
app.use(express.json())

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
    res.sendFile(__dirname + "/pages/HTML/signin.html");
});
app.get("/dashboard", (req,res)=>{
    res.sendFile(__dirname + "/pages/HTML/Dashboard.html");
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