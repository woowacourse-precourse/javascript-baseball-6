import { Console } from "@woowacourse/mission-utils";
import { Message } from "../domain/Constant.js";
const InputView = {
  async readUserGuessNumber(callback) {
    await Console.readLineAsync(Message.GUESS_NUMBER).then((input) => {
      callback(input);
    });
  },

  async readRestartNumber(callback) {
    await Console.readLineAsync(Message.RESTART_GAME).then((input) => {
      callback(input);
    });
  },
};

export default InputView;
