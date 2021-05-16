const express = require("express");
const app=express();

app.get("/", function(req, res){
  res.send("<h1>hello bitch</h1>");
})

app.get("/contact", function(req, res){
  res.send("<h1>Contact me if you wanna get in trouble</h1>");
})

app.get("/about", function(req, res){
  res.send("<h1>Babu-Bhaiya</h1>");
})

app.get("/Kaise-ho", function(req, res){
  res.send("<h1>Babu-Bhaiya, kaise ho?</h1>");
})

app.listen(3000, function(){
  console.log("server started bitch");
});
