const btn = document.querySelectorAll('div.optButton button');
const score = document.querySelector("#score");
const rtButton = document.querySelector('#rtBtn')
const scoreCount = document.createElement('div');

let options =['rock','paper','scissors'];
let message;
let playerScore = 0;
let compScore = 0;
score.textContent = "Pick a sign to start the game";

btn.forEach(button => {button.addEventListener('click', playerSelection)
});
rtButton.addEventListener('click', () => {
    resetGame()
});

function resetGame(){
    playerScore = 0;
    compScore = 0;
    score.textContent = "Start Game";
    scoreCount.textContent = "The score is " + playerScore + " (You) to " + compScore + " (Computer)";
    score.appendChild(scoreCount);
    btn.forEach(button => {button.addEventListener('click', playerSelection)
}
);
}
function computerPlay() {
    let number = Math.floor(Math.random()*options.length);
   // console.log(number);
    return options[number];
}

function playerSelection(e)
{
    let playerSign = (e.target.id);
    playerChoice=e.target.textContent;
    playRound(playerSign, computerPlay())
}


function playRound(playerChoice, compChoice) {
let result ="";

console.log(playerChoice);

if (playerChoice == 0)
{
    if (compChoice == options[0])
    {
        result = "You tied!";
    }
    else if (compChoice== options[1])
    {
        result = "You lost!";
        compScore++;
    }
    else if (compChoice==options[2])
    {
        result = "You won!";
        playerScore++;
    }
}

if (playerChoice == 1)
{
    if (compChoice == options[0])
    {   
    result = "You lost!";
    compScore++;
    }
    else if (compChoice== options[1])
    {
    result = "You won!";
    playerScore++;
    }
    else if (compChoice==options[2])
    {
    result = "You tied!";
    }
}

if (playerChoice == 2)
{
    if (compChoice == options[0])
    {
    result = "You won!";
    playerScore++;
    }
    else if (compChoice== options[1])
    {
    result = "You tied!";
    }
    else if (compChoice==options[2])
    {
    result = "You lost!";
    compScore++;
    }
}

if (playerScore < 5 && compScore < 5)
{
score.textContent =  result + " The computer chose " + compChoice + ".";
scoreCount.textContent = "The score is " + playerScore + " (You) to " + compScore + " (Computer)";
score.appendChild(scoreCount);
}

else if (playerScore == 5){
    score.textContent = "You won!";
    scoreCount.textContent = "Final Score: " +  playerScore + " (You) to " + compScore + " (Computer)";
    score.appendChild(scoreCount);
    btn.forEach(button => {button.removeEventListener('click', playerSelection)
});
}
else {
    score.textContent = "You lost!";
    scoreCount.textContent = "Final Score: " +  playerScore + " (You) to " + compScore + " (Computer)";
    score.appendChild(scoreCount);
    btn.forEach(button => {button.removeEventListener('click', playerSelection);
});
}
}


function game()
{
let message = playRound(playerSelection(), computerPlay());


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

