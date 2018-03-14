//Image Set Up
var myImage = new Image (600, 400);
myImage.src = "../HW-6/images/SME.jpg"

//body
let body = document.body;
body.innerText = "";
body.style.backgroundImage = 'url(http://big5kayakchallenge.com/wp-content/uploads/2018/01/deluxe-pictures-of-backgrounds-kawaii-background-background-clouds-pictures-of-backgrounds.png)';

let ek = document.createElement("div");
let ek1 = document.createElement("h1");
let ek2 = document.createElement("p");
let ek3 = document.createElement("h2");
let ek4 = document.createElement("p");
let ek5 = document.createElement("a");

ek1.innerText = "☕Welcome to my page☕";
ek2.innerText = "Can you believe we are already halfway through the semester? What a journey it's been...";
ek3.innerText = "☀I am SO ready for the sunshine to be here!!☝"
ek4.innerText = "This image of Sailor Moon eating represents my life perfectly this week. I've found myself stress-eating more than normal due to midterms. Hohoho! Find a link on your bottom right for more Sailor Moon :D!"
ek5.innerText = "SailorMoonHeckYEAH!";

ek.setAttribute("style", "text-align:center");
ek1.setAttribute("style", "padding:1em; margin:0; text-align:center; color:#CD8C95");
ek2.setAttribute("style", "padding:0em; margin:0; font-style:bold; text-align:center; color:#872657");
ek3.setAttribute("style", "padding:1em; margin:0; font-style:bold; text-align:center; color:#CD8C95");
ek4.setAttribute("style", "padding:0em; margin:0; font-style:bold; text-align:center; color:#872657");
ek5.setAttribute("href", "https://www.buzzfeed.com/erinf45e036d0f/31-awesome-sailor-moon-gifs-for-every-time-in-your-zbrm?utm_term=.mizqBQdwG#.rdKOolzAK");
ek5.setAttribute("style", "padding:0em; margin:0; font-style:bold; text-align:center; color:#872657");

myImage.setAttribute("style", "padding:0em; margin:200px");

ek.appendChild(ek1);
ek.appendChild(ek2);
ek.appendChild(ek3);
ek.appendChild(ek4);
ek.appendChild(myImage);
ek.appendChild(ek5);

body.appendChild(ek);

//overandout
