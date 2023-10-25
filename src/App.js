import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.computerNumber = this.createComputerNumber();
  }
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    // console.log(this.computerNumber);
    do {
      const input = await this.getUserNumber();

      const result = this.compareNumber(input);
      Console.print(result);

      if (result === '3스트라이크') {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

        const isRestart = await this.askRestart();
        if (isRestart) {
          this.computerNumber = this.createComputerNumber();
        } else {
          break;
        }
      }
    } while (true);
  }

  createComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  validateUserInput(input) {
    if (input.length !== 3 || new Set(input).size !== 3) {
      return true;
    }
    return false;
  }

  async getUserNumber() {
    const input = await Console.readLineAsync(`숫자를 입력해주세요 : `);

    if (this.validateUserInput(input)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return input;
  }

  compareNumber(input) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (this.computerNumber[i] === input[i]) {
        strike++;
      } else if (this.computerNumber.includes(input[i])) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      return '낫싱';
    } else {
      const result = [];
      if (ball) {
        result.push(`${ball}볼`);
      }
      if (strike) {
        result.push(`${strike}스트라이크`);
      }
      return result.join(' ');
    }
  }

  async askRestart() {
    const RESTART = 1;
    const END = 2;

    const input = +(await Console.readLineAsync(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`));

    if (input === RESTART) {
      return true;
    } else if (input === END) {
      return false;
    } else {
      throw new Error('[ERROR] 입력값이 올바르지 않습니다.');
    }
  }
}

const app = new App();
app.play();

export default App;
