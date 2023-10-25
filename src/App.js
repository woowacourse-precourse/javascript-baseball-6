import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor(userNumber, computerNumber) {
    this.userNumber = userNumber;
    this.computerNumber = computerNumber;
  }

  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async getInput() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.inputCheck(input);
    this.computeNumber();
  }

  inputCheck(input) {
    const regexp = /^[1-9]+$/;
    if (!input.match(regexp)) {
      throw new Error('[ERROR] 1부터 9까지의 수가 아닙니다.');
    }
    const number = input.split('').map(Number);
    if (number.length !== 3) {
      throw new Error('[ERROR] 3자리 숫자가 아닙니다.');
    }
    const user = [...new Set(number)];
    if (user.length !== number.length) {
      throw new Error('[ERROR] 서로 다른 숫자가 아닙니다.');
    }
    this.userNumber = user;
  }

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computerNumber = computer;
  }

  computeNumber() {
    const user = this.userNumber;
    const computer = this.computerNumber;
    let ball = 0;
    let strike = 0;
    user.map((num, index) => {
      if (computer.includes(num)) {
        if (num === computer[index]) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
      return { strike, ball };
    });
    if (ball > 0) {
      if (strike > 0) {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      } else {
        Console.print(`${ball}볼`);
      }
    } else if (strike > 0) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print('낫싱');
    }

    if (strike === 3) {
      this.checkRestart();
    } else {
      this.getInput();
    }
  }

  async checkRestart() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    const input = await Console.readLineAsync('');
    if (input === '1') {
      await this.startNewGame();
    } else if (input === '2') {
      return;
    } else {
      throw new Error('[ERROR] 1 또는 2를 입력받지 못했습니다.');
    }
  }

  async startNewGame() {
    this.getRandomNumber();
    await this.getInput();
  }

  async play() {
    this.start();
    await this.startNewGame();
  }
}

export default App;
