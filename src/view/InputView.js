import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readUserGuessNumber(callback) {
    await Console.readLineAsync("숫자를 입력해주세요 : ").then((input) => {
      callback(input);
    });
  },

  async readRestartNumber(callback) {
    await Console.readLineAsync("").then((input) => {
      callback(input);
    });
  },
};

export default InputView;
