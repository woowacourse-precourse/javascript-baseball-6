import { Console } from "@woowacourse/mission-utils";
import { GAME_RULES, MESSAGES } from "../constants/Constants.js";

const ConsoleOutput = {
  printStartMessage() {
    Console.print(MESSAGES.GAME_START);
  },

  printResultMessage(ball, strike) {
    let message = "";

    if (ball === GAME_RULES.NO_BALL && strike === GAME_RULES.NO_STRIKE) {
      message = MESSAGES.NOTHING;
    } else if (ball === GAME_RULES.NO_BALL && strike > GAME_RULES.NO_STRIKE) {
      message = strike + MESSAGES.STRIKE;
    } else if (ball > GAME_RULES.NO_BALL && strike === GAME_RULES.NO_STRIKE) {
      message = ball + MESSAGES.BALL;
    } else if (ball > GAME_RULES.NO_BALL && strike > GAME_RULES.NO_STRIKE) {
      message = ball + MESSAGES.BALL + " " + strike + MESSAGES.STRIKE;
    }
    Console.print(message);
  },

  printEndMessage() {
    Console.print(MESSAGES.GAME_OVER);
  },

  printWinMessage(win) {
    Console.print(win + MESSAGES.GAME_WIN);
  },
};

export default ConsoleOutput;
