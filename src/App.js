import { Console, Random } from '@woowacourse/mission-utils';

class App {
  #answer;
  #number;
  #hint;

  constructor() {
    this.#answer = [];
    this.#number = [];
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

  async getNumber() {
    try {
      const number = await Console.readLineAsync('숫자를 입력해주세요 : ');
      this.#number = [...number];
      Console.print(this.#number);
    } catch (error) {
      throw new Error(error);
    }
  }

  game() {
    this.createAnswer();
    Console.print(this.#answer);
    this.getNumber();
  }

  async play() {
    this.printStartMessage();
    this.game();
  }
}

const app = new App();
app.play();

export default App;
