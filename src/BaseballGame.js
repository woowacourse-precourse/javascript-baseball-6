import { INPUT_MESSAGE, FINISH_MESSAGE } from "./constants/Messages.js";
import { USER_CHOICE } from "./constants/MagicNumber.js";
import { validateCountInput, validateRetryInput } from "./ValidateInput.js";
import { generateRandomNumber } from "./RandomNumber.js";
import { printIntroMessage, printGameResult, printEndMessage } from "./View.js";
import { calculateScore } from "./CalculateScore.js";
import { Console } from "@woowacourse/mission-utils";

async function getUserInput() {
    const userNumber = await Console.readLineAsync(INPUT_MESSAGE.start);
    validateCountInput(userNumber);
    return userNumber;
}

async function askRetry() {
  const retry = await Console.readLineAsync(FINISH_MESSAGE);
  validateRetryInput(retry);
  if (retry === USER_CHOICE.retry) return true;
  else return false;
}

async function startGame() {
  const computer = generateRandomNumber();
  let score;
  let user;
  do {
    user = await getUserInput();
    score = calculateScore(computer, user);
    printGameResult(score);
  } while (score.strike !== 3)
}

async function playGame() {
  let retry;
		do {
	    printIntroMessage();
	    await startGame();
	    retry = await askRetry()
	  } while(retry)
	  printEndMessage();
}

export { playGame };
