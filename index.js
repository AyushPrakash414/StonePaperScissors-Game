let userScore = 0;
let computerScore = 0;
const resultDisplay = document.getElementById("box1");

function computerGeneratedChoice() {
    const choices = ["stone", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScoreBoard() {
    document.querySelector(".win").innerText = `User: ${userScore}`;
    document.querySelector(".loss").innerText = `Computer: ${computerScore}`;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a Draw!";
    } else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return "You Win!";
    } else {
        computerScore++;
        return "Computer Wins!";
    }
}

function playGame(userChoice) {
    const computerChoice = computerGeneratedChoice();
    const resultMessage = determineWinner(userChoice, computerChoice);
    resultDisplay.innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${resultMessage}`;
    updateScoreBoard();
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id.toLowerCase();
        playGame(userChoice);
    });
});

updateScoreBoard();
