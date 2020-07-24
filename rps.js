//
// *************Project #3: Rock Paper Scissors******************


// sets picks to nothing
let userInput;
let compChoice;

// array of things that can be chosen by the computer
let choice = ["rock", "paper", "scissors"];

// sets vatiable for different HTML Elements
let userDisplay = document.getElementById("userInput")
let compDisplay = document.getElementById("computerInput")
let winDisplay = document.getElementById("winner")
let iconDisplay = document.getElementById("icon")
let playAgainDisplay = document.getElementById("playAgain")
let scoreboard = document.getElementById("scoreboard")
let iconPlace = document.getElementById("place")

// sets images for win/loss/tie
let imgLose = document.createElement("img")
imgLose.src = "images/lose.png"

let imgWin = document.createElement("img")
imgWin.src = "images/win.png"

let imgTie = document.createElement("img")
imgTie.src = "images/tie.png"


// sets score counts at 0
let userWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

// here are three button event listeners to represent rock paper and scissors buttons(icons)
document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);

// initializes click variables for timeout functon
let rockClick;
let paperClick;
let scissorClick;

// function for when user input is rock
function rock() {
    userInput = "rock";
    rockClick = true;
    userDisplay.innerHTML = "You Choose " + userInput.toUpperCase()
    compChoice = computerChoiceFunction();
    compDisplay.innerHTML = "The Computer's Choice is " + compChoice.toUpperCase();
    // nope
    setTimeout(function () {
        rockClick = false;
    }, 4000);
    //
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
    userInput = "paper";
    userDisplay.innerHTML = "You Choose " + userInput.toUpperCase()
    compChoice = computerChoiceFunction();
    compDisplay.innerHTML = "The Computer's Choice is " + compChoice.toUpperCase();
    // nope
    setTimeout(function () {
        paperClick = false;
    }, 4000);
    //
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
    userInput = "scissors";
    userDisplay.innerHTML = "You Choose " + userInput.toUpperCase()
    compChoice = computerChoiceFunction();
    compDisplay.innerHTML = "The Computer's Choice is " + compChoice.toUpperCase();
    // nope
    setTimeout(function () {
        scissorClick = false;
    }, 4000);
    //
    if (userInput === compChoice) {
        tie();

    } else if (compChoice === "rock") {
        loss();

    } else {
        win();
    }
}

// displays the scoreboard and clears the scoreboard display if nothing else has been pressed
function clearDisplayTimer() {
    scoreboard.innerHTML = "Wins: " + userWinCount + " Losses: " + computerWinCount + " Ties: " + tieCount
    if (rockClick != true && scissorClick != true && paperClick != true) {
        clearDisplay();
    }

}

// changes the scoreboard element to "Lets Play Again"
function clearDisplay() {
    scoreboard.innerHTML = "Let's Play Again"
}


// this will generate a random answer from the code by using the math function and 
// assigning 1,2,3 to rock paper scissors
// it retuns the choice made by the computer
function computerChoiceFunction() {
    let compChoice = Math.floor(Math.random() * choice.length)
    let compIcon = choice[compChoice]
    return compIcon;
}

// win function
function win() {
    userWinCount++;
    winDisplay.innerHTML = "You Win!"
    clearDisplayTimer();

}

// loss function
function loss() {
    computerWinCount++;
    winDisplay.innerHTML = "You Lose";
    clearDisplayTimer();

}

// tie function
function tie() {
    tieCount++;
    winDisplay.innerHTML = "It's as Tie"
    clearDisplayTimer();

}
