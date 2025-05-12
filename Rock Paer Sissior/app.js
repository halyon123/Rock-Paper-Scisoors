let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

// Function to generate a random choice for the computer
const genComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Function to display a draw message
const drawGame = () => {
    console.log("Game is a Draw");
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "yellow";
}

// Function to display the winner message (either user or computer)
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        console.log("You Win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You Lose");
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You Lose! Your ${userChoice} loses to ${computerChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Function to play the game
const playGame = (userChoice) => {
    console.log("User Choice:", userChoice);

    const computerChoice = genComputerChoice();
    console.log("Computer Choice:", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();  // Handle draw condition when both choices are the same
    } else {
        let userWin = false;

        // Check if the user wins based on game rules
        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            userWin = true;
        }

        showWinner(userWin, userChoice, computerChoice);  // Display winner (either user or computer)
    }
}

// Add event listeners to each choice button
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

