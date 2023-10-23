import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../Asset/Sentence";

const InputView = {
  async readUserLine(callback) {
    await Console.readLineAsync(GUIDE_MESSAGE.USER_NUMBER_INPUT).then((input) =>
      callback(input)
    );
  },

  async readRestartNum(callback) {
    await Console.readLineAsync(GUIDE_MESSAGE.USER_RESTART).then((input) =>
      callback(input)
    );
  },
};
export default InputView;
