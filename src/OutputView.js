import { Console } from "@woowacourse/mission-utils";
import { COMPUTER_MESSAGE, COUNT } from "./constants.js";

const OutputView = {
  printResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print(COUNT.NOTHING);
      return;
    }
    Console.print(`${COUNT.BALL(ball)}${COUNT.STRIKE(strike)}`);
    if (strike === 3) {
      Console.print(COMPUTER_MESSAGE.COMPLETED);
    }
  },
};

export default OutputView;
