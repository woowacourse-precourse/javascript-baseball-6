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

    return this.hintCheck(strikeCount, ballCount);
  }

  checkHint(strikeCount, ballCount) {
    const hint = [];
    if (ballCount !== 0) hint.push(`${ballCount}"볼"`);
    if (strikeCount !== 0) hint.push(`${strikeCount}"스트라이크"`);
    if (ballCount === 0 && strikeCount === 0) hint.push("낫싱");

    Console.print(hint.join(" "));

    if (strikeCount === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }
}

export default BaseballGame;
