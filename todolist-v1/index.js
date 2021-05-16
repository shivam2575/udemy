const express = require("express");
const bp = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["task 1", "task 2", "task 3"];
let workItems = [];

app.set("view engine", "ejs");

app.use(bp.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/",function(req,res){

  var day = date.getDate();


  res.render("list", {listTitle: day, newListItem: items});

});

app.get("/about", function(req,res){
  res.render("about");
});

app.get("/work", function(req,res){
  res.render("list" ,{listTitle:"Work List", newListItem: workItems});
});


app.post("/", function(req, res){

  let item = req.body.newItem;
  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function(){
  console.log("Server started at port 3000 bitch");
});
