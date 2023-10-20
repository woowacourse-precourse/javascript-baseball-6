import { Console } from '@woowacourse/mission-utils';
import { printResult, printStartMessage, readBaseballNumbers } from './View.js';
import BaseBall from './BaseBall.js';

class App {
  constructor() {
    this.baseBall = new BaseBall();
  }

  play() {
    printStartMessage();
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
    }
  }
}

const app = new App();
app.play();

export default App;
