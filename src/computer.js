import { MissionUtils } from '@woowacourse/mission-utils';
import Player from './player.js';
import { NUMBER_OF_DIGITS, STRIKE_COUNT_TO_BE_OUT } from './constants.js';

export default class Computer {
  constructor() {
    this.isGameOver = false;
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  async startGame() {
    const player = new Player();

    this.print('숫자 야구 게임을 시작합니다.');
    this.createRandomArray();

    while (!this.isGameOver) {
      this.playerAnswer = await player.enterAnswer(NUMBER_OF_DIGITS);
      this.checkAnswer();
      if (this.strikeCount === STRIKE_COUNT_TO_BE_OUT) {
        this.setIsGameOver(true);
        this.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      }
    }
  }

  createRandomArray() {
    this.randomArray = [];

    while (this.randomArray.length < NUMBER_OF_DIGITS) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.randomArray.includes(randomNum)) {
        this.randomArray.push(randomNum);
      }
    }
  }

  setIsGameOver(boolean) {
    this.isGameOver = boolean;
  }

  checkAnswer() {
    this.checkStrike();
    this.checkBall();
    this.printCount();
  }

  checkStrike() {
    this.strikeCount = 0;

    for (let i = 0; i < NUMBER_OF_DIGITS; i++) {
      if (this.randomArray[i] === this.playerAnswer[i]) this.strikeCount++;
    }
  }

  checkBall() {
    this.ballCount = 0;

    for (let i = 0; i < NUMBER_OF_DIGITS; i++) {
      if (this.randomArray[i] == this.playerAnswer[i]) continue;
      else if (this.randomArray.includes(this.playerAnswer[i]))
        this.ballCount++;
    }
  }

  printCount() {
    if (!this.strikeCount && this.ballCount) {
      this.print(`${this.ballCount}볼`);
    } else if (this.strikeCount && !this.ballCount) {
      this.print(`${this.strikeCount}스트라이크`);
    } else if (this.strikeCount && this.ballCount) {
      this.print(`${this.ballCount}볼 ${this.strikeCount}스트라이크`);
    } else if (!this.ballCount && !this.strikeCount) {
      this.print('낫싱');
    }
  }

  print(message) {
    MissionUtils.Console.print(message);
  }
}
