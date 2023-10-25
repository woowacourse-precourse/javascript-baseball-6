import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "../constants/message.js";
import { BASEBALL } from "../constants/baseBall.js";

const consoleView = {
  async readNumber() {
    return await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.NUMBER);
  },
  async readRetry() {
    return await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.RETRY);
  },

  printStart() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.START);
  },
  printEnd() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.FINISH);
  },
  printResult(data) {
    MissionUtils.Console.print(data);
  },
  printNothing() {
    MissionUtils.Console.print(BASEBALL.NOTHING);
  },
};

export default consoleView;
