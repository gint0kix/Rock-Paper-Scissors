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
        if (player2 == "Scissors") {
          return "Win";
        }
        break;
      }
      case "Scissors": {
        if (player2 === "Paper") {
          return "Win";
        }
        break;
      }
      case "Paper": {
        if (player2 === "Rock") {
          return "Win";
        }
        break;
      }
      default:
        return "Error in determine Winner";
    }
    return "Lose";
  }
}

function determineWinnerTest() {
  //Test Rock & Scissors
  let testResult1 = determineWinner("Rock", "Scissors");
  testResult1 === "Win"
    ? console.log("Rock & Scissor test PASSED")
    : console.log("Rock & Scissor test FAILED");
  //Test Scissors & Paper
  let testResult2 = determineWinner("Scissors", "Paper");
  testResult2 === "Win"
    ? console.log("Scissors & Paper test PASSED")
    : console.log("Scissors & Paper test FAILED");
  //Test Paper & Rock
  let testResult3 = determineWinner("Paper", "Rock");
  testResult3 === "Win"
    ? console.log("Paper & Rock test PASSED")
    : console.log("Paper & Rock test FAILED");
  //Test Similar Choice
  let testResult4 = determineWinner("Rock", "Rock");
  testResult4 === "Tie"
    ? console.log("Same choice test PASSED")
    : console.log("Same choice test FAILED");
  //Test Lose condition Scissors & Rock
  let testResult5 = determineWinner("Scissors", "Rock");
  testResult5 === "Lose"
    ? console.log("Lose condition test PASSED")
    : console.log("Lose condition test FAILED");
}

function formatUserInput(userInput) {
  let formatedInput = userInput.toLowerCase();
  formatedInput =
    formatedInput.substring(0, 1).toUpperCase() + formatedInput.substring(1);
  return formatedInput;
}

function formatUserInputTest() {
  //Testing all lowercase input
  let test1 = formatUserInput("abcd");
  test1 === "Abcd"
    ? console.log("all lowerCase PASSED")
    : console.log("all lowerCase FAILED");

  //Testing all uppercase input
  let test2 = formatUserInput("ABCD");
  test2 === "Abcd"
    ? console.log("all uppercasse PASSED")
    : console.log("all uppercase FAILED");

  //Testintg random casing input
  let test3 = formatUserInput("AbCd");
  test3 === "Abcd"
    ? console.log("random casing PASSED")
    : console.log("random casing FAILED");
}

function isValidInput(userInput) {
  if (
    userInput === "Rock" ||
    userInput === "Paper" ||
    userInput === "Scissors"
  ) {
    return true;
  }
  return false;
}

function playRound(userInput) {
  let formatedInput = formatUserInput(userInput);
  if (isValidInput(formatedInput)) {
    let computerChoice = getComputerChoice();
    let result = determineWinner(formatedInput, computerChoice);
    return {result:result,userChoice:formatedInput,computerChoice:computerChoice};
  } else {
    console.log("Invalid input, Please Enter either Rock, Paper, Scissors");
    return {result:"Error",userChoice:formatedInput,computerChoice:computerChoice};
  }
}

function game(numberOfGames = 5) {
  let winCounter = 0;
  for (let i = 0; i < numberOfGames; i++) {
    let {result,userChoice,computerChoice} = playRound(); 
    if (result == "Win") {
      console.log(`You Won!, ${userChoice} beats ${computerChoice}`);
      winCounter++;
    } else if (result == "Lose") {
      console.log(`You Lost, ${userChoice} beats ${computerChoice}`);
    } else {
      console.log(`${result}`);
    }
  }
  console.log(`You won ${winCounter} times! \\(^.^)/`)
}
let playerScore = 0;
let computerScore = 0;

function playerChoiceButtonHandler(e){
  const PLAYER_CHOICE = e.target.value;
  const ROUND = playRound(PLAYER_CHOICE);
  let {result, userChoice,computerChoice} ={...ROUND};
  if(result==="Win"){
    playerScore++;
  }else if(result==="Lose"){
    computerScore++;
  }
  const RESULT_DISPLAY = document.querySelector(`#roundResult`);
  RESULT_DISPLAY.textContent=`You ${result} this round`;
  const PLAYER_SCORE_DISPLAY = document.querySelector(`#playerScore`);
  const COMPUTER_SCORE_DISPLAY = document.querySelector(`#computerScore`);
  PLAYER_SCORE_DISPLAY.textContent = `Player Score: ${playerScore}`;
  COMPUTER_SCORE_DISPLAY.textContent = `Computer Score: ${computerScore}`;

  if(playerScore==5){
    RESULT_DISPLAY.textContent=`YOU WON THE GAME! \nCLICK AN OPTION TO BEGIN NEW GAME`
    playerScore=0;
    computerScore=0;
  }else if(computerScore==5){
    RESULT_DISPLAY.textContent=`COMPUTER WON THE GAME \nCLICK AN OPTION TO BEGIN NEW GAME`
    computerScore=0;
    playerScore=0;
  }
}

const PLAYER_CHOICE_BUTTONS = document.querySelectorAll(`.choiceButtons`);

PLAYER_CHOICE_BUTTONS.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    playerChoiceButtonHandler(e);
  });
})

