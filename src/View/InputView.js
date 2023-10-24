import { Console } from "@woowacourse/mission-utils";

class InputView {
  constructor() {}

  static async readLineAsync(outputMessage) {
    const inputMessage = await Console.readLineAsync(outputMessage);
    return inputMessage;
  }
}

export default InputView;