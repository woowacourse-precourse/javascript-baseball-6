import BaseBall from './BaseBall.js';
import OutputView from './view/OutputView.js';
import InputReader from './view/InputReader.js';
import { validation } from './utils/Validation.js';
import { paramType } from './utils/paramType.js';
import { createRandomNumbers } from './utils/createRandomNumbers.js';

class App {
  constructor() {
    this.outputView = new OutputView();
    this.inputReader = new InputReader();
    this.baseBall = null;
  }

  async play() {
    this.outputView.printGameStartMessage();
    await this.setting();
  }

  async setting() {
    const randomNumbers = createRandomNumbers();
    this.baseBall = new BaseBall(randomNumbers);
    await this.pitching();
  }

  async pitching() {
    const response = await this.inputReader.baseBallNumbers();
    const userInput = Number(response);

    await this.check(userInput);
  }

  async check(userInput, _0 = paramType(userInput, Number)) {
    validation.baseBallNumbersInputOfUser(userInput);

    const countResult = this.baseBall.countResult(userInput);
    const { strike } = countResult;

    this.outputView.printBaseBallCountResult(countResult);

    if (strike === 3) {
      await this.complete();
      return;
    }
    await this.pitching();
  }

  async complete() {
    this.outputView.printGameEndMessage();
    await this.requestRestart();
  }

  async requestRestart() {
    const response = await this.inputReader.restartNumber();
    const userInput = Number(response);

    validation.restartNumberInputOfUser(userInput);

    if (userInput === 1) {
      await this.restart();
      return;
    }

    this.end();
  }

  async restart() {
    await this.setting();
  }

  end() {
    return;
  }
}

const app = new App();
app.play();

export default App;
