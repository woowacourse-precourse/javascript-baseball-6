import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input.js";
import InputValidator from "../utils/InputValidator.js";

class BaseballGame {
  async startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.inputUserNumber();
  }

  async inputUserNumber() {
    await Input.readUserInputNumber((input) => {
      InputValidator.validateUserInputNumber(input);
    });
  }
}

export default BaseballGame;
