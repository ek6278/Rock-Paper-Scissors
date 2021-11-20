let options;
let message;

function computerPlay() {
    options = ['rock','paper','scissors'];
    let number = Math.floor(Math.random()*options.length);
    return options[number];
}

function playerSelection()
{
    return window.prompt("choose a sign").toLowerCase(); //returns selection and converts into lowercase

}

function playRound(playerChoice, compChoice) {
let result;
console.log(playerChoice);

if (playerChoice == 'rock')
{
    if (compChoice == options[0])
    {
        result = "You tied!";
    }
    else if (compChoice== options[1])
    {
        result = "You lost!";
    }
    else if (compChoice==options[2])
    {
        result = "You won!";
    }
}

if (playerChoice == 'scissors')
{
    if (compChoice == options[0])
    {   
    result = "You lost!";
    }
    else if (compChoice== options[1])
    {
    result = "You won!";
    }
    else if (compChoice==options[2])
    {
    result = "You tied!";
    }
}

if (playerChoice == 'paper')
{
    if (compChoice == options[0])
    {
    result = "You won!";
    }
    else if (compChoice== options[1])
    {
    result = "You tied!";
    }
    else if (compChoice==options[2])
    {
    result = "You lost!";
    }
}

return result + " The computer chose " + compChoice;
}

function howManyRounds()
{
  let numberOfRounds = window.prompt("How many rounds of RPS would you like to play?");
for (i = 0; i < numberOfRounds; i++)
{
game();
} 
}

function game()
{
let message = playRound(playerSelection(), computerPlay());
let playerScore = 0;
let compScore = 0;

if (message.includes("won"))
{
 playerScore += 1;
}
else if (message.includes("lost"))
{
    compScore += 1;
}



console.log(message + ". The score is: " + playerScore + " (You) to " + compScore + " (Computer)");
}

howManyRounds();