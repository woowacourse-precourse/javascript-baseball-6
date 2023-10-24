import { Console } from "@woowacourse/mission-utils";
import { GuideMessage, Count } from "../constant/constant";

const Output = {
  printStartMessage() {
    Console.print(GuideMessage.START_GAME);
  },

  printHintMessage(ballCount, strikeCount) {
    const hint = [];
    if (ballCount !== 0) hint.push(`${ballCount}${Count.BALL}`);
    if (strikeCount !== 0) hint.push(`${strikeCount}${Count.STRIKE}`);
    if (ballCount === 0 && strikeCount === 0) hint.push(`${Count.NOTHING}`);

    Console.print(hint.join(" "));
  },

  printEndMessage() {
    Console.print(GuideMessage.END_GAME);
  },
};

export default Output;
