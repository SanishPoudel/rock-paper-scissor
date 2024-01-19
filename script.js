// TODO
// write a function getComputerChoice
// write a function getUserChoice
// write a function that plays a single round and returns a string that declares the winner. takes parameter (player and computer)selection.
    // account for ties
// write a function game() to play a best of five game that keeps track of scores and declares winner

let computerScore = 0;
let userScore = 0;

function getComputerChoice()
{
    // This function randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ for the computer selection.
    let myArray = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * myArray.length);
    let choice = myArray[index];
    return choice;
}

function getUserChoice()
{
    // This function returns the user's choice.
    let choice = prompt("Choose rock, paper or scissor.");
    return choice.toLowerCase();
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
    return result;
}

function game()
{
    // This function stimulates a best of five game and return the winner while keeping track of their scores.
    for (let i = 0; i < 5; i++)
    {
        console.log(playRound(getUserChoice(),getComputerChoice()));
        console.log("Your Score:", userScore);
        console.log("Computer's Score:", computerScore);
    }

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

}

game();