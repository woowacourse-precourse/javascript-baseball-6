import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

const OutputView = {
  printStartMessage: () => {
    Console.print(MESSAGE.OUTPUT.START);
  },
  printGuessResult: ({ ball, strike }) => {
    if (ball === 0 && strike === 0) {
      Console.print(MESSAGE.OUTPUT.NOTHING);
      return;
    }

    const printBall = ball ? `${ball}${MESSAGE.OUTPUT.BALL} ` : '';
    const printStrike = strike ? `${strike}${MESSAGE.OUTPUT.STRIKE}` : '';

    Console.print(`${printBall}${printStrike}`);
  },
  printEndMessage: () => {
    Console.print(MESSAGE.OUTPUT.END);
  },
  printExitMessage: () => {
    Console.print(MESSAGE.OUTPUT.EXIT);
  },
}

export default OutputView;