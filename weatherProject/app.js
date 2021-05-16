const express = require('express');

const https = require("https");

const bp = require("body-parser");

const app = express();

app.use(bp.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req, res){
  console.log();

  const city=req.body.Cityname
  const key="398aee901be5ae6081137dba4af78966"
  const unit="metric"

  const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key+"&units="+unit;
  https.get(url, function(response){

    response.on("data", function(data){



      const weatherData = JSON.parse(data);

      const icon = weatherData.weather[0].icon
      const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"

      const temp1 = weatherData.main.temp
      const temp = weatherData.weather[0].description
      res.write("<h1>Temprature in "+city+" is "+temp1+" degree celcius</h1>")
      res.write("<p>The weather outside is "+temp+"</p>")
      res.write("<img src="+imageURL+">")

      res.send()
    })
})

})

app.listen(3000, function(){
  console.log("server started on 3000 bitch");
})
