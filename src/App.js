import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.user = [];
    this.computer = [];
  }

  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async getInput() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.inputCheck(input.trim());
    this.computeGame();
  }

  inputCheck(input) {
    const regexp = /^[1-9]{3}$/;
    if (!input.match(regexp)) {
      throw new Error('[ERROR] 1-9 사이의 3자리 숫자가 아닙니다.');
    }
    const number = input.split('').map(Number);
    if (new Set(number).size !== 3) {
      throw new Error('[ERROR] 서로 다른 숫자가 아닙니다.');
    }
    this.user = number;
  }

  getRandomNumber() {
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(Random.pickNumberInRange(1, 9));
    }
    this.computer = [...computer];
  }

  computeGame() {
    const { user } = this;
    const { computer } = this;
    const strikesAndBalls = user.map((num, index) => ({
      isStrike: num === computer[index],
      isBall: computer.includes(num) && num !== computer[index],
    }));
    const strike = strikesAndBalls.filter((entry) => entry.isStrike).length;
    const ball = strikesAndBalls.filter((entry) => entry.isBall).length;

    this.printGame(strike, ball);
  }

  printGame(strike, ball) {
    let message = '';
    if (ball > 0) {
      message += `${ball}볼`;
    }
    if (strike > 0) {
      if (message.length > 0) {
        message += ' ';
      }
      message += `${strike}스트라이크`;
    }
    if (message.length === 0) {
      message = '낫싱';
    }
    Console.print(message);
    if (strike === 3) {
      return this.checkRestart();
    }
    return this.getInput();
  }

  async checkRestart() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    const input = await Console.readLineAsync('');
    if (!input.trim().match(/^[1-2]{1}$/)) {
      throw new Error('[ERROR] 1 또는 2를 입력받지 못했습니다.');
    }
    if (input.trim() === '1') {
      this.startNewGame();
    }
    if (input.trim() === '2') {
      return;
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
