import { Console } from "@woowacourse/mission-utils";
import OutputView from "./OutputView.js";
import Message from "../utils/message.js";

const InputView = {
  async askNumbers() {
    try {
      const input = await Console.readLineAsync(Message.ASK_NUMBERS);
      // 예외처리
    } catch (error) {
      OutputView.printError(err);
    }
  },
};

export default InputView;
