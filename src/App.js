import { MissionUtils } from '@woowacourse/mission-utils';

const MINIMUMNUMBER = 1;
const MAXIMUMNUMBER = 9;
const NUMBERLENGTH = 3;
const REGEX = /^[1-9]+$/;
const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  ERROR: '[ERROR] 잘못된 형식의 입력입니다.',
  NOTHING: '낫싱',
  BALL: '볼',
  STRIKE: '스트라이크',
  SUCCESS: '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  END: '게임을 종료합니다.',
};
const GAMESTATE = {
  START: '1',
  END: '2',
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
    MissionUtils.Console.print(MESSAGE.START);
    await this.start();
  }

  async start() {
    this.setComputerHasNumber();
    await this.setUserHasNumber();
  }
  setComputerHasNumber() {
    this.computerHasNumber = [];
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
    await this.inputUserNumber();

    this.compareNumber();
    this.printScore();

    if (this.score.strike === 3) {
      await this.reStart();
    } else await this.setUserHasNumber();
  }

  async inputUserNumber() {
    const number = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT);
    if (!REGEX.test(number)) {
      throw new Error(MESSAGE.ERROR);
    }
    this.userHasNumber = [...number].map(Number);
  }

  compareNumber() {
    this.score.strike = 0;
    this.score.ball = 0;
    this.computerHasNumber.forEach((num, idx) => {
      if (num === this.userHasNumber[idx]) {
        this.score.strike += 1;
      }
      if (num !== this.userHasNumber[idx] && this.userHasNumber.includes(num)) {
        this.score.ball += 1;
      }
    });
  }

  printScore() {
    if (this.score.strike === 0 && this.score.ball === 0) {
      MissionUtils.Console.print(MESSAGE.NOTHING);
    }
    if (this.score.strike === 0 && this.score.ball > 0) {
      MissionUtils.Console.print(`${this.score.ball}${MESSAGE.BALL}`);
    }
    if (this.score.strike > 0 && this.score.ball > 0) {
      MissionUtils.Console.print(
        `${this.score.ball}${MESSAGE.BALL} ${this.score.strike}${MESSAGE.STRIKE}`
      );
    }
    if (this.score.strike > 0 && this.score.ball === 0) {
      MissionUtils.Console.print(`${this.score.strike}${MESSAGE.STRIKE}`);
    }
    if (this.score.strike === 3) {
      MissionUtils.Console.print(MESSAGE.SUCCESS);
    }
  }

  async reStart() {
    MissionUtils.Console.print(MESSAGE.RESTART);
    const number = await MissionUtils.Console.readLineAsync('');

    if (number === GAMESTATE.START) await this.start();
    if (number === GAMESTATE.END) MissionUtils.Console.print(MESSAGE.END);
    if (number !== GAMESTATE.START && number !== GAMESTATE.END)
      throw new Error(MESSAGE.ERROR);
  }
}

const app = new App();
app.play();

export default App;
