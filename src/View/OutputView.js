import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../Asset/Sentence";

class OutputView {
  static printStartMessage() {
    Console.print(GUIDE_MESSAGE.GAME_START);
  }

  static printStrikeBallMessage(strike, ball) {
    const message = [];
    if (strike === 0 && ball === 0) message.push("낫싱");
    if (strike !== 0) message.push(`${strike}스트라이크`);
    if (ball !== 0) message.push(`${ball}볼`);

    Console.print(message.join(" "));
  }

  static printGameEnd() {
    Console.print(GUIDE_MESSAGE.USER_GAME_DONE);
    Console.print(GUIDE_MESSAGE.USER_RESTART);
  }
}
