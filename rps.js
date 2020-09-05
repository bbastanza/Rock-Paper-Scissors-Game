document.addEventListener("DOMContentLoaded", function () {
    setInterval(drawObjects, 50);
    setInterval(function () {
        rockDy = -rockDy;
        paperDy = -paperDy;
        scissorDy = -scissorDy;
    }, 600);
});

let rockY = 20;
let paperY = 10;
let scissorY = 20;
let rockDy = -1;
let paperDy = 1;
let scissorDy = -1;

let userWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

const userDisplay = document.getElementById("user-input");
const compDisplay = document.getElementById("computer-input");
const winDisplay = document.getElementById("winner");
const iconDisplay = document.getElementById("icon");
const scoreboard = document.getElementById("scoreboard");
const iconPlace = document.getElementById("place");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => {
    chooseYourWeapon("rock");
});
paperButton.addEventListener("click", () => {
    chooseYourWeapon("paper");
});
scissorButton.addEventListener("click", () => {
    chooseYourWeapon("scissors");
});

function chooseYourWeapon(userChoice) {
    const userInput = userChoice;
    const compChoice = computerChoiceFunction();
    userDisplay.textContent = `You Choose ${userInput.toUpperCase()}`;
    compDisplay.textContent = `The Computer's Choice is ${compChoice.toUpperCase()}`;
    compareWeapons(userInput, compChoice);
}

function compareWeapons(userInput, compChoice) {
    if (userInput === "paper" && compChoice === "rock") {
        win();
    } else if (userInput === "paper" && compChoice === "scissors") {
        loss();
    } else if (userInput === "scissors" && compChoice === "paper") {
        win();
    } else if (userInput === "scissors" && compChoice === "rock") {
        loss();
    } else if (userInput === "rock" && compChoice === "scissors") {
        win();
    } else if (userInput === "rock" && compChoice === "paper") {
        loss();
    } else {
        tie();
    }
}

function computerChoiceFunction() {
    const choice = ["rock", "paper", "scissors"];
    const compChoice = Math.floor(Math.random() * choice.length);
    const compIcon = choice[compChoice];
    return compIcon;
}

let reset;

function win() {
    clearTimeout(reset);
    userWinCount++;
    winDisplay.textContent = "You Win!";
    iconClear();
    winIconCtx.drawImage(imgWin, 0, 0, 100, 100);
    reset = updateScore();
}

function loss() {
    clearTimeout(reset);
    computerWinCount++;
    winDisplay.textContent = "You Lose";
    iconClear();
    winIconCtx.drawImage(imgLose, 0, 0, 100, 100);
    reset = updateScore();
}

function tie() {
    clearTimeout(reset);
    tieCount++;
    winDisplay.textContent = "It's as Tie";
    iconClear();
    winIconCtx.drawImage(imgTie, 0, 0, 100, 100);
    reset = updateScore();
}

function updateScore() {
    scoreboard.textContent = `Wins: ${userWinCount} Losses: ${computerWinCount} Ties: ${tieCount}`;
    let id = setTimeout(function () {
        scoreboard.textContent = "Let's Play Again";
    }, 4000);
    return id;
}

const winIconCanvas = document.getElementById("icon");
const winIconCtx = winIconCanvas.getContext("2d");
const imgLose = new Image();
const imgWin = new Image();
const imgTie = new Image();
imgLose.src = "images/lose.png";
imgWin.src = "images/win.png";
imgTie.src = "images/tie.png";

function drawObjects() {
    const rockImage = new Image();
    const paperImage = new Image();
    const scissorImage = new Image();
    rockImage.src = "images/rock.png";
    paperImage.src = "images/paper.png";
    scissorImage.src = "images/scissors.png";
    const rockCanvas = document.getElementById("rock");
    const paperCanvas = document.getElementById("paper");
    const scissorCanvas = document.getElementById("scissors");
    const rockCtx = rockCanvas.getContext("2d");
    const paperCtx = paperCanvas.getContext("2d");
    const scissorCtx = scissorCanvas.getContext("2d");
    rockCtx.clearRect(0, 0, rockCanvas.width, rockCanvas.height);
    paperCtx.clearRect(0, 0, rockCanvas.width, rockCanvas.height);
    scissorCtx.clearRect(0, 0, rockCanvas.width, rockCanvas.height);

    rockY = updateY(rockY, rockDy);
    paperY = updateY(paperY, paperDy);
    scissorY = updateY(scissorY, scissorDy);

    drawCanvas(rockCanvas, rockImage, rockCtx, rockY);
    drawCanvas(paperCanvas, paperImage, paperCtx, paperY);
    drawCanvas(scissorCanvas, scissorImage, scissorCtx, scissorY);
}

function updateY(y, dy) {
    y += dy;
    return y;
}

function drawCanvas(canvas, image, ctx, starty) {
    image.onload = function () {
        ctx.drawImage(image, 0, starty, canvas.width, canvas.height - 30);
    };
}

function iconClear() {
    winIconCtx.clearRect(0, 0, 100, 100);
}
