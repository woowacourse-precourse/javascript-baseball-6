import OutputView from "../View/OutputView";
import InputView from "../View/InputView";
import InputValid from "../utils/InputValid";
import { RandomNumGenerator } from "../utils/RandomNumGenerator";
import { Scounter, Bcounter } from "../utils/BSCounter";
import { Console } from "@woowacourse/mission-utils";

class BaseballController {
  #COMPUTER_NUM;

  constructor() {
    this.#COMPUTER_NUM = RandomNumGenerator(3);
  }

  async startGame() {
    OutputView.printStartMessage(); // 게임을 시작합니다.
    await this.InputUserNumber();
  }

  async InputUserNumber() {
    await InputView.readUserLine((input) => {
      InputValid.readUserInput(input); // 숫자를 입력하세요 : ...
      this.InGameResult(input); // 게임 판단
    });
  }

  async InputRestartNumber() {
    await InputView.readRestartNum((input) => {
      InputValid.readRestartInput(input);
      if (input === "1") {
        this.reset();
      }
      if (input === "2") {
        return;
      }
    });
  }
  async reset() {
    this.#COMPUTER_NUM = RandomNumGenerator(3);
    await this.InputUserNumber();
  }

  InGameResult(input) {
    // 단순 Calculator
    const inputNums = Array.from(input, Number);
    const strikecount = Scounter(inputNums, this.#COMPUTER_NUM);
    const ballcount = Bcounter(inputNums, this.#COMPUTER_NUM, strikecount);

    return this.GoOrEnd(strikecount, ballcount);
  }

  GoOrEnd(strike, ball) {
    OutputView.printStrikeBallMessage(strike, ball);
    if (strike === 3) {
      OutputView.printGameEnd();
      return this.InputRestartNumber();
    } else {
      this.InputUserNumber();
    }
  }
}
export default BaseballController;
