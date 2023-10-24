import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../Asset/Sentence";

const InputView = {
  async readUserLine() {
    return await Console.readLineAsync(GUIDE_MESSAGE.USER_NUMBER_INPUT);
  },

  async readRestartNum() {
    return await Console.readLineAsync(GUIDE_MESSAGE.USER_RESTART);
  },
};
export default InputView;
