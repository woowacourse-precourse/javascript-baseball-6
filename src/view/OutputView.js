import { Console } from "@woowacourse/mission-utils";
import { Message } from "../domain/Constant.js";
const OutputView = {
  printGameStartMessage() {
    Console.print(Message.GAME_START);
  },

  printUserScore(strike, ball) {
    const score = [];
    if (ball !== 0) score.push(`${ball}${Message.BALL}`);
    if (strike !== 0) score.push(`${strike}${Message.STRIKE}`);
    if (ball === 0 && strike === 0) score.push(`${Message.NOTHING}`);

    Console.print(score.join(" "));
  },

  printGameOverMessage() {
    Console.print(Message.GAME_OVER);
  },
};

export default OutputView;
