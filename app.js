//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/index1", function(req, res){
  res.sendFile(__dirname + "/index1.html");
});

app.get("/amc", function(req, res){
  res.sendFile(__dirname + "/amc.html");
});

app.get("/service", function(req, res){
  res.sendFile(__dirname + "/service.html");
});

app.get("/homepage", function(req, res){
  res.sendFile(__dirname + "/homepage.html");
});

app.get("/homepage1", function(req, res){
  res.sendFile(__dirname + "/homepage1.html");
});

app.get("/join", function(req, res){
  res.sendFile(__dirname + "/join.html");
});

app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/contact.html");
});


app.get("/popup", function(req, res){
  res.sendFile(__dirname + "/popup.html");
});

app.listen(5000, function(){
  console.log("Server is running on port 5000");
});
