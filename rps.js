//
// *************Project #3: Rock Paper Scissors******************
//
//
/// starts drawing images on screen every 100ms, every 600ms all y axis propertys are reversed
document.addEventListener('DOMContentLoaded', function () {
    setInterval(drawObjects, 100);
    setInterval(function () {
        rockDy = -rockDy;
        paperDy = -paperDy;
        scissorDy = -scissorDy;
    }, 600);
});


// sets y axis and movement variables 
let rockY = 20;
let paperY = 10;
let scissorY = 20;
let rockDy = -1;
let paperDy = 1;
let scissorDy = -1;

// sets score counts at 0
let userWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;


// sets vatiable for different HTML Elements
const userDisplay = document.getElementById("user-input");
const compDisplay = document.getElementById("computer-input");
const winDisplay = document.getElementById("winner");
const iconDisplay = document.getElementById("icon");
const scoreboard = document.getElementById("scoreboard");
const iconPlace = document.getElementById("place");


// here are three button event listeners to represent rock paper and scissors buttons(icons)
document.getElementById("rock").addEventListener("click", () => {
    chooseYourWeapon("rock")
});
document.getElementById("paper").addEventListener("click", () => {
    chooseYourWeapon("paper")
});
document.getElementById("scissors").addEventListener("click", () => {
    chooseYourWeapon("scissors")
});

// function called when each item is clicked to update display and pass to compare function
function chooseYourWeapon(userChoice) {
    const userInput = userChoice;
    const compChoice = computerChoiceFunction();
    userDisplay.textContent = `You Choose ${userInput.toUpperCase()}`;
    compDisplay.textContent = `The Computer's Choice is ${compChoice.toUpperCase()}`
    compareWeapons(userInput, compChoice)
}

// this compares all user choices to all computer choices
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


// this will generate a random answer from the code by using the math function and assigning 1,2,3 to rock paper scissors
// it retuns the choice made by the computer
function computerChoiceFunction() {
    const choice = ["rock", "paper", "scissors"];
    const compChoice = Math.floor(Math.random() * choice.length);
    const compIcon = choice[compChoice];
    return compIcon;
}

// initializes reset varaibale for id of set timeout in (updateScore function)
let reset;


// win function- draws win image on screen
function win() {
    clearTimeout(reset);
    userWinCount++;
    winDisplay.textContent = "You Win!";
    iconClear();
    winIconCtx.drawImage(imgWin, 0, 0, 100, 100);
    reset = updateScore();
}


// loss function- draws lose image on screen
function loss() {
    clearTimeout(reset);
    computerWinCount++;
    winDisplay.textContent = "You Lose";
    iconClear();
    winIconCtx.drawImage(imgLose, 0, 0, 100, 100);
    reset = updateScore();
}


// tie function- draws tie image on screen
function tie() {
    clearTimeout(reset);
    tieCount++;
    winDisplay.textContent = "It's as Tie";
    iconClear();
    winIconCtx.drawImage(imgTie, 0, 0, 100, 100);
    reset = updateScore();
}

// function to display score board and set timeout to 4 seconds/ returns the id for a clear tiemout when
// tie, win or loss functions are pressed
function updateScore() {
    scoreboard.textContent = `Wins: ${userWinCount} Losses: ${computerWinCount} Ties: ${tieCount}`;
    let id = setTimeout(function () {
        scoreboard.textContent = "Let's Play Again";
    }, 4000);
    return id;
}


// sets images for win/loss/tie
const winIconCanvas = document.getElementById("icon");
const winIconCtx = winIconCanvas.getContext("2d");
const imgLose = new Image();
const imgWin = new Image();
const imgTie = new Image();
imgLose.src = "images/lose.png";
imgWin.src = "images/win.png";
imgTie.src = "images/tie.png";


// sets variables for all bojects and passes to drawCanvas()
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
    const rockCtx = rockCanvas.getContext('2d');
    const paperCtx = paperCanvas.getContext('2d');
    const scissorCtx = scissorCanvas.getContext('2d');

    //sends y axises and movement variable to (updateY function)
    rockY = updateY(rockY, rockDy);
    paperY = updateY(paperY, paperDy);
    scissorY = updateY(scissorY, scissorDy);

    // draws each image on their respected canvas (drawCanvas function)
    drawCanvas(rockCanvas, rockImage, rockCtx, rockY);
    drawCanvas(paperCanvas, paperImage, paperCtx, paperY);
    drawCanvas(scissorCanvas, scissorImage, scissorCtx, scissorY);
}


// changes movement to negative movement when it is at a certain amount//
function updateY(y, dy) {
    y += dy;
    return y;
}


// takes inputs and draws the context on the canvases.
function drawCanvas(canvas, image, ctx, starty) {
    image.onload = function () {
        ctx.drawImage(image, 0, starty, canvas.width, (canvas.height - 30));
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


// function to clear win,loss,tie image
function iconClear() {
    winIconCtx.clearRect(0, 0, 100, 100);
}