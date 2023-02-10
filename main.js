let finalScore = [0,0];
let roundScore = 0;
let cubeNumbers = ["one" ,"two" ,"three" ,"four" ,"five" ,"six"];

function cleanStart(){
    finalScore = [0,0];
    roundScore = 0;

    document.querySelector(".score-player-0").textContent = "0";
    document.querySelector(".score-player-1").textContent = "0";

    document.querySelector(".current-score-player-0").textContent = "0";
    document.querySelector(".current-score-player-1").textContent = "0";

    document.querySelector(".score-box-0").classList.add("active");
    document.querySelector(".score-box-1").classList.remove("active");

    document.querySelector(".player-name-0").textContent = "Skóre 1. hráče";
    document.querySelector(".player-name-1").textContent = "Skóre 2. hráče";
}

// ----------- ROLL CUBE -----------
document.getElementById("rollCube").addEventListener("click", function (){
   let cube = document.getElementById("cube");
   let randomNumber = Math.floor(Math.random()*cubeNumbers.length);
   let actualNumber = cube.children[0].classList[1];

    // Getting cube dot and add class by random number.
   for(let i = 0; i < cube.children.length; i++){
       cube.children[i].classList.remove(actualNumber);
       cube.children[i].classList.add(cubeNumbers[randomNumber]);
   }
});