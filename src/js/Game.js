import { MissionUtils } from '@woowacourse/mission-utils';
import Output from './Output';

class Game {
  playing = true;

  win = false;

  randomNumbers = [];

  strike = 0;

  ball = 0;

  score = '';

  SCORE_NOTHING = '낫싱';

  SCORE_THREE_STRIKE = '3스크라이크';

  output = new Output();

  constructor() {
    this.makeRandomNumbers();
  }

  makeRandomNumbers() {
    let array = [];
    while (array.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!array.includes(number) && number) {
        if (array.length) {
          array.push(number);
        } else {
          array = [number];
        }
      }
    }
    this.randomNumbers = array;
  }

  resetScore() {
    this.strike = 0;
    this.ball = 0;
    this.score = '';
  }

  reset() {
    this.playing = true;
    this.win = false;
    this.makeRandomNumbers();
  }

  start() {
    this.output.printGameStartMessage();
  }

  restart() {
    this.reset();
  }

  over() {
    this.playing = false;
    this.output.printGameOverMessage();
  }

  /**
   * 플레이어의 입력 숫자들과 랜덤 숫자들을 비교
   * @param {number[]} playerNumbers
   */
  compareNumbers(playerNumbers) {
    this.randomNumbers.forEach((v, i) => {
      if (v === playerNumbers[i]) {
        this.strike += 1;
      } else if (playerNumbers.includes(v)) {
        this.ball += 1;
      }
    });
  }

  /**
   * 볼, 스트라이크를 계산해서 score에 반영
   */
  calculateScore() {
    const isNothing = !this.strike && !this.ball;
    const isThreeStrike = this.strike === 3;
    const strikeAndBall = isThreeStrike
      ? this.SCORE_THREE_STRIKE
      : `${this.ball ? `${this.ball}볼` : ''} ${
          this.strike ? `${this.strike}스트라이크` : ''
        }`;
    const result = isNothing ? this.SCORE_NOTHING : strikeAndBall;
    this.score = result;
  }

  isWin() {
    this.win = this.score === this.SCORE_THREE_STRIKE;
  }

  printScore() {
    switch (this.score) {
      case this.SCORE_NOTHING:
        this.output.printNothingMessage();
        break;
      case this.SCORE_THREE_STRIKE:
        this.output.printThreeStrikeMessage();
        this.output.printWinMessage();
        this.output.printGameRestartMessage();
        break;
      default:
        this.output.printMessage(this.score);
        break;
    }
  }

  /**
   * 게임 상태에 따라,플레이어의 입력값과 렌덤 숫자를 비교해 게임 결과를 보여주거나 게임 재시작 또는 종료를 진행
   * @param {number[]} playerNumbers
   */
  referee(playerNumbers) {
    if (this.win) {
      if (playerNumbers[0] === 1) {
        this.restart();
      } else {
        this.over();
      }
    } else {
      this.compareNumbers(playerNumbers);
      this.calculateScore();
      this.isWin();
      this.printScore();
    }
    this.resetScore();
  }
}

export default Game;
