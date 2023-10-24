import { Console, Random } from '@woowacourse/mission-utils';

class Util {
  computer = [];
  msg = {
    error: '[ERROR] 숫자가 잘못된 형식입니다.',
    ball: '볼',
    strike: '스트라이크',
    nothing: '낫싱'
  };

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
}

export default Util;
