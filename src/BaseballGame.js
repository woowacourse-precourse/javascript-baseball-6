import { INPUT_MESSAGE, FINISH_MESSAGE, USER_CHOICE_RETRY } from "./constants/Messages.js";
import { validateInput } from "./ValidateInput.js";
import { generateRandomNumber } from "./RandomNumber.js";
import { printIntroMessage, printGameResult, printEndMessage } from "./View.js";
import { calculateScore } from "./CalculateScore.js";
import { Console } from "@woowacourse/mission-utils";

async function getUserInput() {
  try {
    const userNumber = await Console.readLineAsync(INPUT_MESSAGE.start);
    validateInput(userNumber);
    return userNumber;
  }
  catch (error) {
    throw error;
  }
}

async function askRestart() {
  const retry = await Console.readLineAsync(FINISH_MESSAGE);
  if (retry == USER_CHOICE_RETRY) return true;
  else return false;
}

async function startGame() {
  const computer = generateRandomNumber();
  let score;
  let user;
  try {
    do {
      user = await getUserInput();
      score = calculateScore(computer, user);
      printGameResult(score);
    } while (score.strike !== 3)
  }
  catch (error) {
    throw error;
  }
}

async function playGame() {
  let retry;
	try{
		do {
	    printIntroMessage();
	    await startGame();
	    retry = await askRestart()
	  } while(retry)
	  printEndMessage();
	}
	catch (error) {
		throw error;
	}
}

export { playGame };