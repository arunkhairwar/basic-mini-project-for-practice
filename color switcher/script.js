// alert("this game will be danger are you ready to play!")

const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const choose = document.getElementById("choose");

console.log(choose);

let bg =document.querySelector("body");

red.addEventListener("click", colorSwitcher);
green.addEventListener("click", colorSwitcher);
blue.addEventListener("click", colorSwitcher);
yellow.addEventListener("click", colorSwitcher);

function colorSwitcher() {
    
        let color = window.getComputedStyle(this).backgroundColor;
        console.log(this.innerHTML);
        bg.style.backgroundColor = color;
    }