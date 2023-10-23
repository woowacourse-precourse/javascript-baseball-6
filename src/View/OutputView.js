import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../Asset/Sentence";

const OutputView = {
  printStartMessage() {
    Console.print(GUIDE_MESSAGE.GAME_START);
  },

  printStrikeBallMessage(strike, ball) {
    const message = [];
    if (ball !== 0) message.push(`${ball}볼`);
    if (strike !== 0) message.push(`${strike}스트라이크`);
    if (strike === 0 && ball === 0) message.push("낫싱");

    Console.print(message.join(" "));
  },
  printGameEnd() {
    Console.print(GUIDE_MESSAGE.USER_GAME_DONE);
  },
};
export default OutputView;
