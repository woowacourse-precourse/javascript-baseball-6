import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "../constants/message.js";

const consoleView = {
  async readNumber() {
    return await Console.readLineAsync(INPUT_MESSAGE.NUMBER);
  },

  async readRetry() {
    return await Console.readLineAsync(INPUT_MESSAGE.RETRY);
  },

  async printStart() {
    await Console.print(OUTPUT_MESSAGE.START);
  },
};

export default consoleView;
