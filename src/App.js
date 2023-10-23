import { Console, Random } from '@woowacourse/mission-utils';

class App {
  computer = [];
  msg = {
    start: '숫자 야구 게임을 시작합니다.',
    input: '숫자를 입력해주세요 : ',
    error: '[ERROR] 숫자가 잘못된 형식입니다.',
    ball: '볼',
    strike: '스트라이크',
    nothing: '낫싱',
    end: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    select: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
  };

  constructor() {
    Console.print(this.msg.start);
    this.computer = this.createComputer();
  }

  async play() {
    const GUESS_ANS = await Console.readLineAsync(this.msg.input);
    const STRIKE = this.validateNumber(GUESS_ANS);
    if (STRIKE === 3) {
      Console.print(this.msg.end);
      const END_ANS = await Console.readLineAsync(this.msg.select);
      this.endGame(END_ANS);
    } else {
      return this.play();
    }
  }

  createComputer() {
    const RANDOM = [];
    while (RANDOM.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9);
      if (RANDOM.indexOf(NUMBER) < 0) {
        RANDOM.push(NUMBER);
      }
    }
    return RANDOM;
  }

  validateNumber(answer) {
    const MY_SET = new Set();
    [...answer].forEach((str) => {
      if (Number(str)) {
        MY_SET.add(Number(str));
      }
    });
    if (!MY_SET.has(0) && MY_SET.size === 3) {
      return this.getStrike([...MY_SET]);
    }
    throw new Error(this.msg.error);
  }

  getStrike(numbers) {
    let ball = 0;
    let strike = 0;
    numbers.forEach((num, idx) => {
      if (this.computer[idx] === num) {
        strike += 1;
      } else if (this.computer.indexOf(num) >= 0) {
        ball += 1;
      }
    });
    const HINT = this.printHint(ball, strike);
    Console.print(HINT);
    return strike;
  }

  printHint(ball, strike) {
    if (ball > 0 && strike > 0) {
      return `${ball}${this.msg.ball} ${strike}${this.msg.strike}`;
    } else if (ball > 0) {
      return `${ball}${this.msg.ball}`;
    } else if (strike > 0) {
      return `${strike}${this.msg.strike}`;
    }
    return this.msg.nothing;
  }

  endGame(answer) {
    if (answer === '1') {
      this.computer = this.createComputer();
      return this.play();
    } else if (answer !== '2') {
      throw new Error(this.msg.error);
    }
    return;
  }
}

const APP = new App();
APP.play();

export default App;
