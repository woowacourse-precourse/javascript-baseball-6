import { Console } from "@woowacourse/mission-utils";

const Input = {
  async readUserInputNumber(callback) {
    await Console.readLineAsync("숫자를 입력해주세요 : ").then((input) => {
      callback(input);
    });
  },

  async readRestartInputNumber(callback) {
    await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    ).then((input) => {
      callback(input);
    });
  },
};

export default Input;
