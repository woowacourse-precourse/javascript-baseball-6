import { Console } from "@woowacourse/mission-utils";
import OutputView from "./OutputView.js";
import Message from "../utils/message.js";
import ExceptionHandler from "../utils/ExceptionHandler.js";
import convertInput from "../utils/convertInput.js";

const InputView = {
  async askNumbers() {
    try {
      const input = await Console.readLineAsync(Message.ASK_NUMBERS);
      const numArr = convertInput(input);
      return numArr;
    } catch (error) {
      // TODO
    }
  },
};

export default InputView;
