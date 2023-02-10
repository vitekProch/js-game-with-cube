let finalScore = [0,0];
let roundScore = 0;

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