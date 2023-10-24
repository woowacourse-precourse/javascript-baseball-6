import { MissionUtils } from '@woowacourse/mission-utils';
import Output from './Output';

class Game {
  playing = true;

  win = false;

  randomNumbers = [];

  output = new Output();

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

  constructor() {
    this.makeRandomNumbers();
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

  /**
   * 게임 종료
   * @param {*} showMessage  : 게임종료 시, 이에 대한 메세지 표시 여부
   */
  over(showMessage) {
    this.playing = false;
    this.win = false;
    if (showMessage) this.output.printGameOverMessage();
  }
}

export default Game;
