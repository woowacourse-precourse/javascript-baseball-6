import { Console } from "@woowacourse/mission-utils";
import Message from "../utils/message.js";
import convertInput from "../utils/convertInput.js";

const InputView = {
  // 세자리 숫자를 입력받는다
  async getNumbers() {
    try {
      const input = await Console.readLineAsync(Message.ASK_NUMBERS);
      const numArr = convertInput(input);
      return numArr;
    } catch (error) {
      // TODO
    }
  },

  // 게임을 리플레이할지 종료 입력을 받는다
  async getRestartOrQuitAnswer() {
    try {
      const input = await Console.readLineAsync(Message.ASK_CONTINUE_OR_QUIT);
      return input;
    } catch (err) {}
  },
};

export default InputView;
