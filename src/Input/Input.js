import { Console } from "@woowacourse/mission-utils";

const Input = {
  async readUserInputNumber(callback) {
    await Console.readLineAsync("숫자를 입력해주세요 : ").then((input) => {
      callback(input);
    });
  },
};

export default Input;
