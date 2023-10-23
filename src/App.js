import { readBaseballNumbers, readRestartNumber } from './view/View.js';
import BaseBall from './BaseBall.js';
import OutputView from './view/OutputView.js';

class App {
  constructor(outputView) {
    this.outputView = outputView || new OutputView();
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
    const response = await readBaseballNumbers('숫자를 입력해주세요 : ');
    const userInput = Number(response);

    await this.check(userInput);
  }

  async check(userInput) {
    const countResult = this.baseBall.countResult(userInput);
    const { strike } = countResult;

    if ([...String(userInput)].length !== 3) {
      throw new Error('[ERROR] 3자리 숫자만 입력해주세요');
    }

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
    const response = await readRestartNumber(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
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

  end() {
    return;
  }
}

const outputView = new OutputView();
const app = new App(outputView);
app.play();

export default App;
