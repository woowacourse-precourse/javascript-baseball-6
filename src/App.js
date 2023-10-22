import { Console, Random } from '@woowacourse/mission-utils';

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

  createAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#answer = computer;
  }

  game() {
    this.createAnswer();
    Console.print(this.#answer);
  }

  async play() {
    this.printStartMessage();
    this.game();
  }
}

const app = new App();
app.play();

export default App;
