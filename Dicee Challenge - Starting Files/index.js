var randomNumber1=Math.ceil(Math.random()*6);

var randomDice = "images/dice" + randomNumber1 +".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDice);

var randomNumber2 = Math.ceil(Math.random()*6);

var randomDice2 = "images/dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDice2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 win";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 win";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
