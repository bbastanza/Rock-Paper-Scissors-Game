//
// *************Project #3: Rock Paper Scissors******************
//
// Add event listener to see when the page has loaded
//


let userInput;
let compChoice;
let choice = ["rock", "paper", "scissors"];
let userDisplay = document.getElementById("userInput")
let compDisplay = document.getElementById("computerInput")
let winDisplay = document.getElementById("winner")
let iconDisplay = document.getElementById("icon")
let playAgainDisplay = document.getElementById("playAgain")
let iconPlace = document.getElementById("place")

let imgLose = document.createElement("img")
imgLose.src = "images/lose.png"

let imgWin = document.createElement("img")
imgWin.src = "images/win.png"

let imgTie = document.createElement("img")
imgTie.src = "images/tie.png"



// here are three button event listeners to represent rock paper and scissors buttons(icons)
document.getElementById("rock").addEventListener("click", rock)
document.getElementById("paper").addEventListener("click", paper)
document.getElementById("scissors").addEventListener("click", scissors)



// there will be three functions, one for each choice, that will handle when a button is pressed
// each of these will display in the DOM what the user has chose


// function for when user input is rock
function rock() {
    userInput = "rock";
    userDisplay.innerHTML = "You Choose " + userInput.toUpperCase()
    compChoice = computerChoiceFunction();
    compDisplay.innerHTML = "The Computer's Choice is " + compChoice.toUpperCase();

    if (userInput === compChoice) {
        winDisplay.innerHTML = "It's as Tie";
        clearDisplayTimer();
    } else if (compChoice === "paper") {
        winDisplay.innerHTML = "You Lose"
        clearDisplayTimer();
    } else {
        winDisplay.innerHTML = "You Win!"
        clearDisplayTimer();
    }
}

// function for when user input is paper
function paper() {
    userInput = "paper";
    userDisplay.innerHTML = "You Choose " + userInput.toUpperCase()
    compChoice = computerChoiceFunction();
    compDisplay.innerHTML = "The Computer's Choice is " + compChoice.toUpperCase();

    if (userInput === compChoice) {
        winDisplay.innerHTML = "It's as Tie"
        clearDisplayTimer();
    } else if (compChoice === "scissors") {
        winDisplay.innerHTML = "You Lose"
        clearDisplayTimer();
    } else {
        winDisplay.innerHTML = "You Win!"
        clearDisplayTimer();
    }
}


// function for when user input is scissors
function scissors() {
    userInput = "scissors";
    userDisplay.innerHTML = "You Choose " + userInput.toUpperCase()
    compChoice = computerChoiceFunction();
    compDisplay.innerHTML = "The Computer's Choice is " + compChoice.toUpperCase();

    if (userInput === compChoice) {
        winDisplay.innerHTML = "It's as Tie"
        clearDisplayTimer();

    } else if (compChoice === "rock") {
        winDisplay.innerHTML = "You Lose";
        clearDisplayTimer();

    } else {
        winDisplay.innerHTML = "You Win!"
        clearDisplayTimer();

    }
}

function clearDisplayTimer() {
    setTimeout(function () {
        clearDisplay();
    }, 4000)
}


function clearDisplay() {
    userDisplay.innerHTML = "Let's Play Again"
    compDisplay.innerHTML = ""
    winDisplay.innerHTML = ""

}

// then they will pass variable to a comuterChoice function
// this will generate a random answer from the code by using the math function and assigning 1,2,3 to rock paper scissors
function computerChoiceFunction() {
    let compChoice = Math.floor(Math.random() * choice.length)
    let compIcon = choice[compChoice]
    return compIcon;
}



