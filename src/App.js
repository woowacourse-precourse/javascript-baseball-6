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

  isThreeDigit(input) {
    return input.length === 3;
  }

  isOneToNine(input) {
    const pattern = /^[1-9]+$/;
    return pattern.test(input.join(''));
  }

  isNotDuplicateNumber = (input) => {
    const set = new Set(input);
    return input.length === set.size;
  };

  checkValidNumber(input) {
    if (!this.isThreeDigit(input)) {
      throw '[ERROR] 세자리 숫자가 아닙니다.';
    }
    if (!this.isOneToNine(input)) {
      throw '[ERROR] 1부터 9까지의 숫자가 아닙니다.';
    }
    if (!this.isNotDuplicateNumber(input)) {
      throw '[ERROR] 중복된 자리수가 있습니다.';
    }
  }

  async getNumber() {
    try {
      const number = await Console.readLineAsync('숫자를 입력해주세요 : ');
      this.#number = [...number];
      this.checkValidNumber(this.#number);
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
