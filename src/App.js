import { Console } from '@woowacourse/mission-utils';

class App {
  #answer;
  #hint;

  constructor() {
    this.#answer = [];
    this.#hint = { strike: 0, ball: 0 };
  }

  printStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    this.printStartMessage();
  }
}

const app = new App();
app.play();

export default App;
