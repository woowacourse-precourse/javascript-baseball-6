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

  async printStart() {
    await MissionUtils.Console.print(OUTPUT_MESSAGE.START);
  },
  async printEnd() {
    await MissionUtils.Console.print(OUTPUT_MESSAGE.FINISH);
  },
  async printResult(data) {
    await MissionUtils.Console.print(data);
  },
  async printNothing() {
    await MissionUtils.Console.print(BASEBALL.NOTHING);
  },
};

export default consoleView;
