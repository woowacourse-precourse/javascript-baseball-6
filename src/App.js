import { MissionUtils, Console } from '@woowacourse/mission-utils';

const MINIMUMNUMBER = 1;
const MAXIMUMNUMBER = 9;
const NUMBERLENGTH = 3;
const REGEX = /^(?!.*(\d).*\1)\d{3}$/;
const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  ERROR: '[ERROR] 잘못된 형식의 입력입니다.',
  NOTHING: '낫싱',
  SUCCESS: '3스트라이크',
  BALL: '볼',
  STRIKE: '스트라이크',
};

class App {
  constructor() {
    this.computerHasNumber = [];
    this.userHasNumber = [];
    this.score = {
      strike: 0,
      ball: 0,
    };
  }
  async play() {
    Console.print(MESSAGE.START);
    this.setComputerHasNumber();
    this.setUserHasNumber();
  }

  setComputerHasNumber() {
    while (this.computerHasNumber.length < NUMBERLENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(
        MINIMUMNUMBER,
        MAXIMUMNUMBER
      );
      if (!this.computerHasNumber.includes(number)) {
        this.computerHasNumber.push(number);
      }
    }
  }

  async setUserHasNumber() {
    const number = await Console.readLineAsnync(MESSAGE.INPUT);
    if (!REGEX.test(number)) {
      throw new Error(MESSAGE.ERROR);
    }

    this.userHasNumber = [...number].map(Number);

    this.compareNumber();
    this.printScore();
  }

  compareNumber() {
    this.computerHasNumber.forEach((e, idx) => {
      if (e === this.userHasNumber[idx]) {
        this.score.strike += 1;
      } else if (this.userHasNumber.includes(e)) {
        this.score.ball += 1;
      }
    });
  }

  printScore() {
    if (this.score.strike === 0 && this.score.ball === 0) {
      Console.print(MESSAGE.NOTHING);
    } else if (this.score.strike === 0 && this.score.ball !== 0) {
      Console.print(`${this.score.ball}${MESSAGE.BALL}`);
    } else if (this.score.strike !== 0 && this.score.ball !== 0) {
      Console.print(
        `${this.score.ball}${MESSAGE.BALL} ${this.score.strike}${MESSAGE.STRIKE}`
      );
    } else if (this.score.strike !== 0 && this.score.ball === 0) {
      Console.print(`${this.score.strike}${MESSAGE.STRIKE}`);
    } else {
      Console.print(MESSAGE.SUCCESS);
    }
  }
}

export default App;
