import { Console } from "@woowacourse/mission-utils";
import { GuideMessage } from "../domain/Constant.js";

const OutputView = {
  printStartMessage() {
    Console.print(GuideMessage.START_GAME);
  },

  printHintMessage(ballCount, strikeCount) {
    const hint = [];
    if (ballCount !== 0) hint.push(`${ballCount}볼`);
    if (strikeCount !== 0) hint.push(`${strikeCount}스트라이크`);
    if (ballCount === 0 && strikeCount === 0) hint.push(`낫싱`);

    Console.print(hint.join(" "));
  },

  printEndMessage() {
    Console.print(GuideMessage.CORRECT_NUMBER);
  },
};

export default OutputView;
