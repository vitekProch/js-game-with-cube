let finalScore = [0,0];
let roundScore = 0;
let cubeNumbers = ["one" ,"two" ,"three" ,"four" ,"five" ,"six"];
let actualPlayer = 0;
let winScore = 10;
let cubeRotate = 180;

// ----------- ROLL CUBE AND CURRENT SCORE UPDATE -----------
document.getElementById("rollCube").addEventListener("click", function (){
   let cube = document.getElementById("cube");
   let randomNumber = Math.floor(Math.random()*cubeNumbers.length);
   let actualNumber = cube.children[0].classList[1];
   cubeRotate *= (-1);
   cube.style.rotate = cubeRotate + "deg";
   cube.classList.remove("hidden");
    // Getting cube dot and add class by random number.
   for(let i = 0; i < cube.children.length; i++){
       cube.children[i].classList.remove(actualNumber);
       cube.children[i].classList.add(cubeNumbers[randomNumber]);
   }
   if (randomNumber !== 0){
       roundScore += randomNumber + 1;
       document.querySelector(".current-score-player-" + actualPlayer).textContent = roundScore;
   }
   else {
       nextPlayer();
   }
});
// ----------- SAVE SCORE, SCORE UPDATE -----------
document.getElementById("saveScore").addEventListener("click", function (){
    finalScore[actualPlayer] += roundScore;
    document.querySelector(".score-player-" + actualPlayer).textContent = finalScore[actualPlayer];
    if (finalScore[actualPlayer] >= winScore){
        winGame();
    }
    else{
        nextPlayer();
    }
});
// ----------- NEW GAME -----------
document.getElementById("newGame").addEventListener("click", function (){
    finalScore = [0,0];
    roundScore = 0;
    actualPlayer = 0;

    document.querySelector(".score-player-0").textContent = "0";
    document.querySelector(".score-player-1").textContent = "0";

    document.querySelector(".current-score-player-0").textContent = "0";
    document.querySelector(".current-score-player-1").textContent = "0";

    document.querySelector(".score-box-0").classList.add("active");
    document.querySelector(".score-box-1").classList.remove("active");

    document.querySelector(".player-name-0").textContent = "Skóre 1. hráče";
    document.querySelector(".player-name-1").textContent = "Skóre 2. hráče";

    document.getElementById("rollCube").classList.remove("disabled");
    document.getElementById("saveScore").classList.remove("disabled");

    document.getElementById("cube").classList.toggle("hidden");
});

function winGame(){
    document.querySelector(".player-name-" + actualPlayer).textContent = "Vítěz! Vítěz!";

    document.getElementById("rollCube").classList.add("disabled");
    document.getElementById("saveScore").classList.add("disabled");

}

function nextPlayer(){
    roundScore = 0;
    document.querySelector(".current-score-player-" + actualPlayer).textContent = roundScore;

    document.querySelector(".score-box-0").classList.toggle("active");
    document.querySelector(".score-box-1").classList.toggle("active");

    if (actualPlayer === 0){
        actualPlayer = 1;
    }
    else{
        actualPlayer = 0;
    }

}