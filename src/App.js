import { Console } from '@woowacourse/mission-utils';
import { printStartMessage, readBaseballNumbers } from './View.js';
import BaseBall from './BaseBall.js';

class App {
  constructor() {}

  async play() {
    printStartMessage();

    const userInput = await readBaseballNumbers('숫자를 입력해주세요 : ');
  }
}

const app = new App();
app.play();

export default App;
