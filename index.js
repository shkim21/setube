const express = require('express'); //import express at node modules
const app = express(); //execute

const PORT = 4000;

function handleListening(){
    console.log('Listening on: http://localhost:${PORT}');
}

function handleHome(req, res){
    console.log(req);
    res.send("Hello from home");
}

function handleProfile(req, res){
    res.send("You are on my profile");
}

app.get("/", handleHome);

app.listen(PORT, handleListening); //listen이 뭔지 찾아볼것!

app.listen(PORT, handleListening);