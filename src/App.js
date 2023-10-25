import BaseBall from './BaseBall.js';
import OutputView from './view/OutputView.js';
import InputReader from './view/InputReader.js';
import { validation } from './utils/Validation.js';
import { paramType } from './utils/paramType.js';
import { createRandomNumbers } from './utils/createRandomNumbers.js';

class App {
  constructor(outputView, inputReader) {
    this.outputView = outputView || new OutputView();
    this.inputReader = inputReader || new InputReader();
    this.baseBall = new BaseBall();
  }

  async play() {
    this.outputView.printGameStartMessage();
    await this.setting();
  }

  async setting() {
    this.baseBall.init();
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
      this.restart();
      return;
    }
    this.end();
  }

  restart() {
    this.setting();
  }

  end() {
    return;
  }
}

const outputView = new OutputView();
const inputReader = new InputReader();
const app = new App(outputView, inputReader);
app.play();

export default App;
