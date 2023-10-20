import { Console } from "@woowacourse/mission-utils";
import { GuideMessage } from "../constant/Constant.mjs";

const InputView = {
  readUserNumber(callback) {
    Console.readLineAsync(GuideMessage.INPUT_NUMBER).then((input) => {
      callback(input);
    });
  },

  readRestartNumber(callback) {
    Console.readLineAsync(GuideMessage.RESTART_GAME).then((input) => {
      callback(input);
    });
  },
};

export default InputView;
