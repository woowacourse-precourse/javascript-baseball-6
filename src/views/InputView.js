import { Console } from "@woowacourse/mission-utils";

const InputView = {
  getUserNumber(message) {
    return new Promise((resolve) => {
      Console.readLine(message, (input) => {
        resolve(input);
      });
    });
  }
};

export default InputView;