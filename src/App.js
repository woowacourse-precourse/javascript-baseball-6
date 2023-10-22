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
    this.createComputer();
  }

  async play() {
    const ANSWER = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.validateNumber(ANSWER);
  }

  createComputer() {
    const RANDOM = [];
    while (RANDOM.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9);
      if (!RANDOM.includes(NUMBER)) {
        RANDOM.push(NUMBER);
      }
    }
    this.computer = [...RANDOM];
  }

  validateNumber(answer) {
    const MY_SET = new Set();
    for (let i = 0; i < answer.length; i += 1) {
      if (Number(answer[i])) {
        MY_SET.add(Number(answer[i]));
      }
    }
    if (!MY_SET.has(0) && MY_SET.size === 3) {
      this.continueGame([...MY_SET]);
    } else {
      throw new Error(this.msg.error);
    }
  }

  continueGame(numbers) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      if (this.computer[i] === numbers[i]) {
        strike += 1;
      } else if (this.computer.includes(numbers[i])) {
        ball += 1;
      }
    }
    const HINT = this.printHint(ball, strike);
    Console.print(HINT);
    if (strike === 3) {
      this.endGame();
    } else {
      this.play();
    }
  }

  printHint(ball, strike) {
    let hint = '';
    if (ball && strike) {
      hint = `${ball}${this.msg.ball} ${strike}${this.msg.strike}`;
    } else if (ball) {
      hint = `${ball}${this.msg.ball}`;
    } else if (strike) {
      hint = `${strike}${this.msg.strike}`;
    } else {
      hint = this.msg.nothing;
    }
    return hint;
  }

  async endGame() {
    Console.print(this.msg.end);
    const ANSWER = await Console.readLineAsync(this.msg.select);
    if (ANSWER === '1') {
      this.createComputer();
      this.play();
    } else if (ANSWER === '2') {
      return;
    } else {
      throw new Error(this.msg.error);
    }
  }
}

export default App;
