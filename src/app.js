/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = [
  "Love is",
  "Your finances are",
  "Your health is",
  "Your Spirituality is"
];
let action = ["looking up", "stagnate", "looking down"];
let what = [
  "but stay true to your path.",
  "but don't loose focus on your goals.",
  "and good fortune is around the corner.",
  "but be ready for an new adventure."
];

let randomIdx = Math.floor(Math.random() * who.length);
let whoR = who[randomIdx];
let actionR = action[Math.floor(Math.random() * action.length)];
let whatR = what[Math.floor(Math.random() * what.length)];

document.getElementById("fortune").innerHTML =
  whoR + " " + actionR + " " + whatR;
