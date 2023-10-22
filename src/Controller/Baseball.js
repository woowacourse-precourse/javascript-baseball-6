import Model from "../Model/Model.js";
import View from "../View/View.js";

class Baseball {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  async init() {
    try {
      this.view.printGameStart();
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
    } catch (err) {
      throw err;
    }
  }
}

const baseball = new Baseball();

export default baseball;
