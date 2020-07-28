//
// *************Project #3: Rock Paper Scissors******************
document.addEventListener('DOMContentLoaded', function () {
    setInterval(drawObjects, 100)
});


let rockY = 0
let paperY = 10
let scissorY = 20
let rockDy = -1
let paperDy = -1
let scissorDy = -1



// initializes picks from user and computer
let userInput;
let compChoice;

// array of things that can be chosen by the computer
let choice = ["rock", "paper", "scissors"];

// sets vatiable for different HTML Elements
let userDisplay = document.getElementById("userInput");
let compDisplay = document.getElementById("computerInput");
let winDisplay = document.getElementById("winner");
let iconDisplay = document.getElementById("icon");
let playAgainDisplay = document.getElementById("playAgain");
let scoreboard = document.getElementById("scoreboard");
let iconPlace = document.getElementById("place");

// sets images for win/loss/tie
let imgLose = document.createElement("img");
imgLose.src = "images/lose.png";

let imgWin = document.createElement("img");
imgWin.src = "images/win.png";

let imgTie = document.createElement("img");
imgTie.src = "images/tie.png";


// sets score counts at 0
let userWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

// here are three button event listeners to represent rock paper and scissors buttons(icons)
document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);

function setScoreHtml() {
    setTimeout(function () {
        scoreboard.innerHTML = "Let's Play Again";
    }, 4000);
}

// function for when user input is rock
function rock() {
    clearDisplayTimer.clearTime();
    userInput = "rock";
    userDisplay.innerHTML = "You Choose " + userInput.toUpperCase();
    compChoice = computerChoiceFunction();
    compDisplay.innerHTML = "The Computer's Choice is " + compChoice.toUpperCase();

    if (userInput === compChoice) {
        tie();
    } else if (compChoice === "paper") {
        loss();
    } else {
        win();
    }
}

// function for when user input is paper
function paper() {
    clearDisplayTimer.clearTime();
    userInput = "paper";
    userDisplay.innerHTML = "You Choose " + userInput.toUpperCase();
    compChoice = computerChoiceFunction();
    compDisplay.innerHTML = "The Computer's Choice is " + compChoice.toUpperCase();

    if (userInput === compChoice) {
        tie();
    } else if (compChoice === "scissors") {
        loss();
    } else {
        win();
    }
}


// function for when user input is scissors
function scissors() {
    clearDisplayTimer.clearTime();
    userInput = "scissors";
    userDisplay.innerHTML = "You Choose " + userInput.toUpperCase();
    compChoice = computerChoiceFunction();
    compDisplay.innerHTML = "The Computer's Choice is " + compChoice.toUpperCase();
    if (userInput === compChoice) {
        tie();

    } else if (compChoice === "rock") {
        loss();

    } else {
        win();
    }
}



// displays the scoreboard and clears the scoreboard display if nothing else has been pressed in 4 seconds
let clearDisplayTimer = {
    update: function () {
        scoreboard.innerHTML = "Wins: " + userWinCount + " Losses: " + computerWinCount + " Ties: " + tieCount;
    },
    timeOut: function () {
        setTimeout(function () {
            scoreboard.innerHTML = "Let's Play Again";
        }, 4000);
    },
    clearTime: function () {
        clearTimeout(this.timeOut)
    }
}



// sets variables for all bojects and passes to drawCanvas()
function drawObjects() {


    let rockImage = new Image()
    let paperImage = new Image()
    let scissorImage = new Image()
    rockImage.src = "images/rock.png"
    paperImage.src = "images/paper.png"
    scissorImage.src = "images/scissors.png"
    let rockCanvas = document.getElementById("rock")
    let paperCanvas = document.getElementById("paper")
    let scissorCanvas = document.getElementById("scissors")
    let rockCtx = rockCanvas.getContext('2d')
    let paperCtx = paperCanvas.getContext('2d')
    let scissorCtx = scissorCanvas.getContext('2d')

    //sends y axises and movement variable to update function
    rockY = updateY(rockY, rockDy)
    paperY = updateY(paperY, paperDy)
    scissorY = updateY(scissorY, scissorDy)

    drawCanvas(rockCanvas, rockImage, rockCtx, rockY)
    drawCanvas(paperCanvas, paperImage, paperCtx, paperY)
    drawCanvas(scissorCanvas, scissorImage, scissorCtx, scissorY)
}


function updateY(y, dy) {
    if (y - dy < 30 || y + dy > 30) {
        dy = -dy;
    }
    y += dy;
    return y;
}

// takes inputs and draws the context on the canvases.
function drawCanvas(canvas, image, ctx, starty) {

    image.onload = function () {
        ctx.drawImage(image, 0, starty, canvas.width, (canvas.height - 30))
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

// this will generate a random answer from the code by using the math function and assigning 1,2,3 to rock paper scissors
// it retuns the choice made by the computer
function computerChoiceFunction() {
    let compChoice = Math.floor(Math.random() * choice.length);
    let compIcon = choice[compChoice];
    return compIcon;
}

// win function
function win() {
    userWinCount++;
    winDisplay.innerHTML = "You Win!";
    clearDisplayTimer.update();
    clearDisplayTimer.timeOut();
}

// loss function
function loss() {
    computerWinCount++;
    winDisplay.innerHTML = "You Lose";
    clearDisplayTimer.update();
    clearDisplayTimer.timeOut();
}

// tie function
function tie() {
    tieCount++;
    winDisplay.innerHTML = "It's as Tie";
    clearDisplayTimer.update();
    clearDisplayTimer.timeOut();
}

