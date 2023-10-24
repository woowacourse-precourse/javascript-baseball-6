import { MissionUtils } from '@woowacourse/mission-utils';

class IOHandler {
  static #ERROR_MESSAGE = {
    ONLY_NUMBER: '[ERROR] : 숫자만 입력 가능합니다.',
  };

  static displayMessage(message) {
    MissionUtils.Console.print(message);
  }

  static async getUserInputNumber(message) {
    const input = await MissionUtils.Console.readLineAsync(message);
    IOHandler.#validateUserInputIsNumber(input);

    return input;
  }

  static #validateUserInputIsNumber(input) {
    if (isNaN(input)) {
      throw new Error(IOHandler.#ERROR_MESSAGE.ONLY_NUMBER);
    }
  }
}

export default IOHandler;
