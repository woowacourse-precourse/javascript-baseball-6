import { Console, Random } from '@woowacourse/mission-utils';

class App {
  #answer;
  #number;
  #hint;
  #exit;

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
    } catch (error) {
      throw new Error(error);
    }
  }

  createHint() {
    for (const index in this.#answer) {
      if (this.#answer[index] == this.#number[index]) {
        this.#hint.strike++;
      } else {
        for (const num of this.#number) {
          if (this.#answer[index] == num) {
            this.#hint.ball++;
          }
        }
      }
    }
    Console.print(this.#hint);
  }

  gameEnd() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.getGameEnd();
  }

  printResult() {
    const { strike, ball } = this.#hint;
    if (strike === 3) {
      this.gameEnd();
    } else if (strike && ball) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (ball) {
      Console.print(`${ball}볼`);
    } else if (strike) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print('낫싱');
    }
  }

  isOneOrTwo(input) {
    const pattern = /^[12]$/;
    if (!pattern.test(input)) {
      throw '[ERROR] 1 또는 2가 아닙니다.';
    }
  }

  async getGameEnd() {
    try {
      const number = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
      );
      this.isOneOrTwo(number);
      this.#exit = Number(number);
    } catch (error) {
      throw new Error(error);
    }
  }

  async game() {
    this.createAnswer();
    Console.print(this.#answer);
    await this.getNumber();
    this.createHint();
    this.printResult();
  }

  async play() {
    this.printStartMessage();
    this.game();
  }
}

const app = new App();
app.play();

export default App;
