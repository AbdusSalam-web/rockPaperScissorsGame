const button = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");
button.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.innerHTML = `${result}`;
    console.log(resultEl);
  });
});
let computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];

  const randomChoices = Math.floor(Math.random() * choices.length);
  return choices[randomChoices];
};
let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `It's a tie! computer:${computerSelection} player:${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `you won! player:${playerSelection} beats computer:${computerSelection}`;
  } else
    return `you lose! computer:${computerSelection} beats player:${playerSelection}`;
};
