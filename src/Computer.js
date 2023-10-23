import { MissionUtils } from '@woowacourse/mission-utils';
import Interface from './Interface.js';

export default class Computer {
  #answer;

  createAnswer() {
    const ANSWER = new Set();
    while (ANSWER.size < 3) {
      const NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      ANSWER.add(String(NUM));
    }
    this.#answer = [...ANSWER.values()];
  }

  /**
* @param {string} value
* @returns {{strike: number, ball: number}}
*/
  outputOfTheCountAlongValue(value) {
    let [strike, ball] = [0, 0];
    for (let i = 0; i < 3; i += 1) {
      if (this.#answer[i] === value[i]) {
        strike += 1;
      } else if (this.#answer.includes(value[i])) {
        ball += 1;
      }
    }
    return { strike, ball };
  }

  /**
* @param {{strike: number, ball: number}} theCount
* @returns {"Correct" | "Incorrect"}
*/
  static outputOfResultAlongTheCount(theCount) {
    if (theCount.strike === 3) {
      return Computer.outputCorrectCase();
    } if (theCount.ball === 0 && theCount.strike === 0) {
      return Computer.outputNotingCase();
    }
    return Computer.outputDefaultCase(theCount);
  }

  static outputCorrectCase() {
    Interface.printMessage('3스트라이크');
    Interface.printMessage(
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    );
    return 'Correct';
  }

  static outputNotingCase() {
    Interface.printMessage('낫싱');
    return 'Incorrect';
  }

  static outputDefaultCase(theCount) {
    const BALL_MESSAGE = theCount.ball !== 0 ? `${theCount.ball}볼` : '';
    const STRIKE_MESSAGE = theCount.strike !== 0 ? `${theCount.strike}스트라이크` : '';
    const MESSAGE = `${BALL_MESSAGE} ${STRIKE_MESSAGE}`.trim();
    Interface.printMessage(MESSAGE);

    return 'Incorrect';
  }
}
