import { Console } from "@woowacourse/mission-utils";

import ComputerNumber from "./ComputerNumber.js";
import Messages from "./common/messages.js";
import ValidateUserInput from "./utils/validateUserInput.js";
import strikeBallCount from "./controller/strikeBallCount.js";

class BaseballGame {
  constructor() {
    this.inputValue;
    this.computerNumber = new ComputerNumber().computerNumber;
    this.isGameStarted = false;
  }

  // 게임 시작하기
  async startGame() {
    if (!this.isGameStarted) {
      Console.print(Messages.START_MESSAGE);
      this.isGameStarted = true;
    }

    await this.getUserInputNumbers();
  }

  // 숫자 입력 받기
  async getUserInputNumbers() {
    let input = await Console.readLineAsync(Messages.ENTER_MESSAGE);
    input = input.trim();
    if (!input) {
      this.getUserInputNumbers();
      return;
    }

    const validate = new ValidateUserInput(input);
    if (!validate.validateUserInput()) {
      throw new Error(Messages.USER_INPUT_ERROR_MESSAGE);
    }

    this.inputValue = input.split("").map(Number);
    strikeBallCount(this, this.computerNumber, this.inputValue);
  }
}

export default BaseballGame;
