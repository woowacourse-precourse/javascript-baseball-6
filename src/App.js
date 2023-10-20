import { Console, Random } from '@woowacourse/mission-utils';

class App {
  #COMPUTER = [];
  START_MSG = '숫자 야구 게임을 시작합니다.';
  INPUT_MSG = '숫자를 입력해주세요 : ';
  ERROR_MSG = '[ERROR] 숫자가 잘못된 형식입니다.';
  BALL_MSG = '볼';
  STRIKE_MSG = '스트라이크';
  NOTHING_MSG = '낫싱';
  END_MSG = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
  SELECT_MSG = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';

  constructor() {
    Console.print(this.START_MSG);
  }

  async play() {
    this.createComputer();
    this.validateNumber();
  }

  createComputer() {
    const random = [];
    while (random.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!random.includes(number)) {
        random.push(number);
      }
    }
    this.#COMPUTER = [...random];
  }

  async validateNumber() {
    const answer = await Console.readLineAsync(this.INPUT_MSG);
    let number = Number(answer);
    if (!number) {
      throw new Error(this.ERROR_MSG);
    }
    const set = new Set();
    while (number > 0) {
      set.add(number % 10);
      number = Math.floor(number / 10);
    }
    if (!set.has(0) && set.size === 3) {
      const numbers = [...set].reverse();
      this.continueGame(numbers);
    } else {
      throw new Error(this.ERROR_MSG);
    }
  }

  continueGame(numbers) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      if (this.#COMPUTER[i] === numbers[i]) {
        strike += 1;
      } else if (this.#COMPUTER.includes(numbers[i])) {
        ball += 1;
      }
    }
    this.printHint(ball, strike);
  }

  printHint(ball, strike) {
    let hint = '';
    if (ball && strike) {
      hint = `${ball}${this.BALL_MSG} ${strike}${this.STRIKE_MSG}`;
    } else if (ball) {
      hint = `${ball}${this.BALL_MSG}`;
    } else if (strike) {
      hint = `${strike}${this.STRIKE_MSG}`;
    } else {
      hint = this.NOTHING_MSG;
    }
    Console.print(hint);
    if (strike === 3) {
      Console.print(this.END_MSG);
      this.endGame();
    } else {
      this.validateNumber();
    }
  }

  async endGame() {
    const answer = await Console.readLineAsync(this.SELECT_MSG);
    if (answer === '1') {
      this.play();
    } else if (answer !== '2') {
      throw new Error(this.ERROR_MSG);
    }
  }
}

const app = new App();
app.play();

export default App;
