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
          return "You Win!";
        }break;
      }
      case "Scissors": {
        if (player2 === "Paper") {
          return "You Win!";
        }break;
      }
      case "Paper": {
        if (player2 === "Rock") {
          return "You Win!";
        }break;
      }
      default:return "Error in determine Winner"
    }
    return "You Lose!";
  }
}

function determineWinnerTest(){
  //Test Rock & Scissors 
  let testResult1 = determineWinner("Rock","Scissors");
  testResult1==="You Win!" ? console.log("Rock & Scissor test PASSED"):console.log("Rock & Scissor test FAILED");
  //Test Scissors & Paper
  let testResult2 = determineWinner("Scissors","Paper");
  testResult2==="You Win!" ? console.log("Scissors & Paper test PASSED"):console.log("Scissors & Paper test FAILED");
  //Test Paper & Rock
  let testResult3 = determineWinner("Paper","Rock");
  testResult3==="You Win!" ? console.log("Paper & Rock test PASSED"):console.log("Paper & Rock test FAILED");
  //Test Similar Choice
  let testResult4 = determineWinner("Rock","Rock");
  testResult4 ==="Tie" ? console.log("Same choice test PASSED"):console.log("Same choice test FAILED");
  //Test Lose condition Scissors & Rock
  let testResult5 = determineWinner("Scissors","Rock");
  testResult5 === "You Lose!" ? console.log("Lose condition test PASSED"):console.log("Lose condition test FAILED");
}

function formatUserInput(userInput){
  let formatedInput = userInput.toLowerCase();
  formatedInput = formatedInput.substring(0,1).toUpperCase() + formatedInput.substring(1);
  return formatedInput;
}

function formatUserInputTest(){
  //Testing all lowercase input
  let test1 = formatUserInput("abcd");
  test1==="Abcd"?console.log("all lowerCase PASSED"):console.log("all lowerCase FAILED");

  //Testing all uppercase input
  let test2 = formatUserInput("ABCD");
  test2==="Abcd"?console.log("all uppercasse PASSED"):console.log("all uppercase FAILED");

  //Testintg random casing input
  let test3 = formatUserInput("AbCd");
  test3==="Abcd"?console.log("random casing PASSED"):console.log("random casing FAILED");
}

formatUserInputTest();