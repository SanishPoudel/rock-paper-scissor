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
        console.log(playRound(getUserChoice(), getComputerChoice()));
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
        console.log(playRound(getUserChoice(), getComputerChoice()));
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
        console.log(playRound(getUserChoice(), getComputerChoice()));
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
    let result = "";
    if (playerSelection === computerSelection)
    {
        result = `You: ${playerSelection} \nComputer: ${computerSelection} \nIt's a tie.`;
    }
    else if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper"))
    {
        result = `You: ${playerSelection} \nComputer: ${computerSelection} \nYou win.`;
        userScore ++;
    }
    else
    {
        result = `You: ${playerSelection} \nComputer: ${computerSelection} \nYou lost`;
        computerScore ++;
    }
    rounds += 1;
    console.log(rounds);
    return result;
}

function game()
{
    console.log("Your Score:", userScore);
    console.log("Computer's Score:", computerScore);
    
    if (userScore > computerScore)
    {
        console.log("Congratulation! You have won the game by a score of", userScore, "-", computerScore);
    }
    else if (userScore < computerScore)
    {
        console.log("Unfortunately, You have lost the game by a score of", computerScore, "-", userScore);
    }
    else
    {
        console.log("This game was a tie.")
    }
    rounds = 0;
}