import {
  printEndMessage,
  printResult,
  printStartMessage,
  readBaseballNumbers,
  readRestartNumber,
} from './View.js';
import BaseBall from './BaseBall.js';

class App {
  constructor() {
    this.baseBall = new BaseBall();
  }

  play() {
    printStartMessage('숫자 야구 게임을 시작합니다.');
    this.setting();
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

    printResult(countResult);

    if (strike === 3) {
      this.complete();
      return;
    }
    await this.piching();
  }

  complete() {
    printEndMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.requestRestart();
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

const app = new App();
app.play();

export default App;
