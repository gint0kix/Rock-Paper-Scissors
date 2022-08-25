function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 2);
  switch (randomValue) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return "Error in getComputerChoice";
  }
}

function getComputerChoiceTest(testValue) {
  if (
    testValue === "Rock" ||
    testValue === "Paper" ||
    testValue === "Scissors"
  ) {
    return "getComputerChoiceTest Passed";
  } else {
    return "getComputerChoiceTest Failed!";
  }
}

function determineWinner(player1, player2) {
  if (player1 === player2) {
    return "Tie";
  } else {
    switch (player1) {
      case "Rock": {
        if (player2 === "Scissors") {
          return "You Win!";
        }
      }
      case "Scissors": {
        if (player2 === "Paper") {
          return "You Win!";
        }
      }
      case "Paper": {
        if (player2 === "Rock") {
          return "You Win!";
        }
      }
      default:{return "You Lose!"}
    }
  }
}
