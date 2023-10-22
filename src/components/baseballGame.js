import { Console } from "@woowacourse/mission-utils";
import { CreateNumber } from "./createNumber.js";
import { vaildateNumber } from "./vaildateNumber.js";
import Messages from "../util/Messages.js";
import { compareNumber } from "./compareNumber.js";

class BaseballGame {
  async start() {
    const randomNumber = new CreateNumber().randomNumber;
    Console.print(randomNumber);
    while (true) {
      const userNumber = await this.getUserInput();
      Console.print(userNumber);
    }
  }
  async getUserInput() {
    try {
      const userNumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
      return userNumber;
    } catch (error) {
      throw new Error(Messages.ERROR.REJECTED_READLINE);
    }
  }
}

export default BaseballGame;
