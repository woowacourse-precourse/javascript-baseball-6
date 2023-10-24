import { Console } from "@woowacourse/mission-utils";
import { GuideMessage } from "../constant/constant";

const Input = {
  async readUserInputNumber(callback) {
    await Console.readLineAsync(GuideMessage.INPUT_NUMBER).then((input) => {
      callback(input);
    });
  },

  async readRestartInputNumber(callback) {
    await Console.readLineAsync(GuideMessage.RESTART_GAME).then((input) => {
      callback(input);
    });
  },
};

export default Input;
