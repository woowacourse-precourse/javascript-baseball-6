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
    this.baseBall.init();
    this.piching();
  }

  async piching() {
    const userInput = await readBaseballNumbers('숫자를 입력해주세요 : ');
    this.check(Number(userInput));
  }

  check(userInput) {
    const countResult = this.baseBall.countResult(userInput);
    const { strike } = countResult;
    printResult(countResult);
    if (strike !== 3) {
      this.piching();
      return;
    }

    if (strike === 3) {
      this.complete();
    }
  }

  complete() {
    printEndMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.requestRestart();
  }

  requestRestart() {
    const userInput = await readRestartNumber('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
  }
}

const app = new App();
app.play();

export default App;
