import { Console } from "@woowacourse/mission-utils";
import { CreateNumber } from "./createNumber.js";
import { vaildateNumber } from "./vaildateNumber.js";
import { compareNumber } from "./compareNumber.js";
import Messages from "../util/Messages.js";

class BaseballGame {
  async start() {
    const randomNumber = new CreateNumber().randomNumber;
    while (true) {
      // 숫자 입력 받기
      const inputNumber = await this.getUserInput();

      // 유효성 검사
      if (!vaildateNumber(inputNumber)) {
        throw new Error(Messages.ERROR.INVALID_BALL_NUMBER);
      }

      // userNumber를 문자열에서 배열로 바꾸기
      const userNumber = inputNumber.split("").map(Number);

      // 볼, 스트라이크 검사
      if (compareNumber(randomNumber, userNumber)) {
        Console.print(Messages.RESULT);
        break;
      }
    }
  }

  async getUserInput() {
    try {
      const userNumber = await Console.readLineAsync(Messages.INPUT_NUMBER);
      return userNumber;
    } catch (error) {
      throw new Error(Messages.ERROR.REJECTED_READLINE);
    }
  }
}

export default BaseballGame;
