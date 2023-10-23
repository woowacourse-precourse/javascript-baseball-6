import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../Asset/Sentence";

class InputView {
  static async readUserLine(callback) {
    await Console.readLineAsync(GUIDE_MESSAGE.USER_NUMBER_INPUT).then((input) =>
      callback(input)
    );
  }

  static async readRestartNum(callback) {
    await Console.readLineAsync(GUIDE_MESSAGE.USER_RESTART).then((input) =>
      callback(input)
    );
  }
}
