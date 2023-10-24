import { OUTPUT_MESSAGE, GAME_RESULT } from "./constants/Messages.js";
import { Console } from "@woowacourse/mission-utils";

function printIntroMessage() {
  Console.print(OUTPUT_MESSAGE.intro);
}

function printGameResult(score = {}) {
  let message = "";
  if (score.strike === 0 && score.ball === 0) {
    message += GAME_RESULT.nothing;
  }
  else {
    if (score.ball > 0) {
      message += score.ball + GAME_RESULT.ball;
    }
    if (score.strike > 0) {
      if (message !== "") message += " ";
      message += score.strike + GAME_RESULT.strike;  
    }
  }
  Console.print(message);
}

function printEndMessage() {
  Console.print(OUTPUT_MESSAGE.end);
}

export { printIntroMessage, printGameResult, printEndMessage };
