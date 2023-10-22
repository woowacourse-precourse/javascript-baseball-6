import { Console } from "@woowacourse/mission-utils";
import Model from "../Model/Model.js";
import View from "../View/View.js";

class Baseball {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.restart = false;
  }

  async init() {
    try {
      !this.restart ? this.view.printGameStart() : "";

      await this.start(this.model.makeComputerRandomNumber());
    } catch (err) {
      this.view.printErrorMessage(err.message);
      throw err;
    }
  }

  async start(randomNumbers) {
    try {
      const userNumberInput = await this.view.readLineInput("숫자를 입력해주세요 : ");
      const [ballCount, strikeCount] = this.model.compareNumbers(randomNumbers, userNumberInput);

      this.view.printHint(ballCount, strikeCount);

      strikeCount === 3 ? this.quit() : this.start(randomNumbers);
    } catch (err) {
      throw err;
    }
  }

  async quit() {
    this.view.printPlayEnd();

    const restartStateInput = await this.view.readLineInput("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

    if (restartStateInput === "1") {
      this.restart = true;
      this.init();
    }
    if (restartStateInput === "2") {
      this.view.printGameEnd();
      process.exitCode = 0;
    }
  }
}

const baseball = new Baseball();

export default baseball;
