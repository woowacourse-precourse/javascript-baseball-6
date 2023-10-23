import Model from "../Model/Model.js";
import { validateEndInputNumber } from "../utils/validateNumber.js";
import View from "../View/View.js";

class Baseball {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.restart = false;
  }

  async init() {
    try {
      !this.restart ? this.view.printMessage("숫자 야구 게임을 시작합니다") : "";

      await this.start(this.model.makeComputerRandomNumber());
    } catch (err) {
      this.view.printMessage(err.message);
      throw err;
    }
  }

  async start(randomNumbers) {
    try {
      const userNumberInput = await this.view.readLineInput("숫자를 입력해주세요 : ");
      const [ballCount, strikeCount] = this.model.compareNumbers(randomNumbers, userNumberInput);

      this.view.printHint(ballCount, strikeCount);

      strikeCount === 3 ? await this.quit() : this.start(randomNumbers);
    } catch (err) {
      throw err;
    }
  }

  async quit() {
    try {
      this.view.printMessage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const restartStateInput = await this.view.readLineInput("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

      validateEndInputNumber(restartStateInput);

      if (restartStateInput === "1") {
        this.restart = true;
        this.init();
      }
      if (restartStateInput === "2") {
        this.view.printMessage("게임 종료");
        process.exitCode = 0;
      }
    } catch (err) {
      throw err;
    }
  }
}

const baseball = new Baseball();

export default baseball;
