import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input.js";
import InputValidator from "../utils/InputValidator.js";
import Compare from "../Compare/CompareNumber.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";

class BaseballGame {
  #baseball;

  constructor() {
    this.#baseball = new Compare(RandomNumberGenerator.generateRandomNumber(3));
  }

  async startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.inputUserNumber();
  }

  async inputUserNumber() {
    await Input.readUserInputNumber((input) => {
      InputValidator.validateUserInputNumber(input);
      this.calculateCount(input);
    });
  }

  calculateCount(input) {
    const inputNumber = Array.from(input, Number);
    const strikeCount = this.#baseball.getStrikeCount(inputNumber);
    const ballCount = this.#baseball.getBallCount(inputNumber, strikeCount);
  }
}

export default BaseballGame;
