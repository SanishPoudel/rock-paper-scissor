// TODO
// write a function getComputerChoice
// write a function getUserChoice
// write a function that plays a single round and returns a string that declares the winner. takes parameter (player and computer)selection.
    // account for ties
// write a function game() to play a best of five game that keeps track of scores and declares winner

let computerScore = 0;
let userScore = 0;
let rounds = 0;
let choice = "";

const r = document.querySelector("#r");
const p = document.querySelector("#p");
const s = document.querySelector("#s");
const items = document.querySelector(".items");



function getComputerChoice()
{
    // This function randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ for the computer selection.
    let myArray = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * myArray.length);
    let choice = myArray[index];
    return choice;
}

r.addEventListener
(
    "click", function rockChoice()
    {
        choice = "rock";

        let Rdiv = document.createElement("div");
        Rdiv.textContent = (playRound(getUserChoice(), getComputerChoice()));
        items.appendChild(Rdiv);
        
        if (rounds === 5)
        {
            game()
        }
    }

);

p.addEventListener
(
    "click", function paperChoice()
        {
        choice = "paper";

        let Pdiv = document.createElement("div");
        Pdiv.textContent = (playRound(getUserChoice(), getComputerChoice()));
        items.appendChild(Pdiv);

        if (rounds === 5)
        {
            game()
        }
    }
);

s.addEventListener
(
    "click", function scissorChoice()
    {
        choice = "scissor";

        let Sdiv = document.createElement("div");
        Sdiv.textContent = (playRound(getUserChoice(), getComputerChoice()));
        items.appendChild(Sdiv);

        if (rounds === 5)
        {
            game()
        }
    }
);

function getUserChoice()
{
    // This function returns the user's choice.
    return choice;
}

function playRound(playerSelection, computerSelection)
{
    // This function returns a string that declares the winner of the round. 
    rounds += 1;
    if (rounds > 5)
    {
        alert("Reload the page to play again.");
        return null;
    }
    
    let result = "";
    if (playerSelection === computerSelection)
    {
        result = "<br> You: " + playerSelection + "<br> Computer:" + computerSelection + "<br><br> It's a tie. <br><br>";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper"))
    {
        result = "<br> You: " + playerSelection + "<br> Computer: " + computerSelection + "<br><br> You win. <br><br>";
        userScore ++;
    }
    else
    {
        result = "<br> You: " + playerSelection + "<br> Computer: " + computerSelection + "<br><br> You lost. <br><br>";
        computerScore ++;
    }
    document.getElementById('result').innerHTML = result;
    return;
}

function game()
{
    // // This function returns the winner while keeping track of their scores.
    let yourScore = document.createElement("div"); 
    yourScore.textContent = ("Your Score: " + userScore);
    items.appendChild(yourScore);

    let compScore = document.createElement("div");
    compScore.textContent = ("Computer's Score: " + computerScore);
    items.appendChild(compScore);
    
    let result = document.createElement("div");
    if (userScore > computerScore)
    {
        result.textContent = ("Congratulation! You have won the game by a score of " + userScore + " - " + computerScore);
    }
    else if (userScore < computerScore)
    {
        result.textContent = ("Unfortunately, You have lost the game by a score of " + computerScore + " - " + userScore);
    }
    else
    {
        result.textContent = ("This game was a tie.")
    }

    items.appendChild(result);
    
}