import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor(user_number, computer_number) {
    this.user_number = user_number;
    this.computer_number = computer_number;
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
    const number = input.split('').map(Number);
    if (number.length !== 3) {
      throw new Error('[ERROR] 3자리 숫자가 아닙니다.');
    }
    const user = [];
    number.forEach(element => {
      if (!user.includes(element)) {
        user.push(element);
      } else {
        throw new Error('[ERROR] 서로 다른 숫자가 아닙니다.');
      }
    });
    this.user_number = user;
  }

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const computer_num = Random.pickNumberInRange(1,9);
      if (!computer.includes(computer_num)) {
        computer.push(computer_num);
      }
    }
    this.computer_number = computer;
  }

  computeNumber() {
    const user = this.user_number;
    const computer = this.computer_number;
    let ball = 0;
    let strike = 0;
    for (let i = 0, j = 0; i < 3, j < 3; i++, j++) {
      if (user.includes(computer[j])) {
        if (user[i] === computer[j]) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }
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

// const app = new App();
// app.play();
