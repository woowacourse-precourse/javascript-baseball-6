import BaseBall from './BaseBall.js';
import OutputView from './view/OutputView.js';
import InputReader from './view/InputReader.js';

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
    await this.piching();
  }

  async piching() {
    const response = await this.inputReader.baseBallNumbers();
    const userInput = Number(response);

    await this.check(userInput);
  }

  async check(userInput) {
    if ([...String(userInput)].length !== 3)
      throw new Error('[ERROR] 3자리 숫자만 입력해주세요');

    if (new Set([...String(userInput)]).size !== [...String(userInput)].length)
      throw new Error('[ERROR] 중복되지 않은 숫자를 입력해주세요');

    const countResult = this.baseBall.countResult(userInput);
    const { strike } = countResult;

    this.outputView.printBaseBallCountResult(countResult);

    if (strike === 3) {
      this.complete();
      return;
    }
    await this.piching();
  }

  async complete() {
    this.outputView.printGameEndMessage();
    await this.requestRestart();
  }

  async requestRestart() {
    const response = await this.inputReader.restartNumber();
    const userInput = Number(response);

    if (![1, 2].includes(userInput)) {
      throw new Error('[ERROR]');
    }

    if (userInput === 1) {
      this.restart();
      return;
    }
    this.end();
  }

  restart() {
    this.setting();
  }

  end() {}
}

const outputView = new OutputView();
const inputReader = new InputReader();
const app = new App(outputView, inputReader);
app.play();

export default App;
