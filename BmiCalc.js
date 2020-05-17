// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    
    var w = parseFloat(req.body.w);
    var h = parseFloat(req.body.h);

    var bmi = w / (h * h);

    res.send("Your body weight mass index is: " + bmi);
});



app.listen(4000, function(){
    console.log("Listening on port 4000");
});