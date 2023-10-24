import { Console } from "@woowacourse/mission-utils";
import { GuideMessage } from "../domain/Constant.js";

const InputView = {
  async readUserNumber(callback) {
    await Console.readLineAsync(GuideMessage.INPUT_NUMBER).then((input) => {
      callback(input);
    });
  },

  async readRestartNumber(callback) {
    await Console.readLineAsync(GuideMessage.RESTART_GAME).then((input) => {
      callback(input);
    });
  },
};

export default InputView;
