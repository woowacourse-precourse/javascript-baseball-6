import { MissionUtils } from '@woowacourse/mission-utils';
import { BALL_COUNTS } from '../../constants/index.js';

class Opponent {
  /**
   * private 필드 정의 제안
   * @type {[number, number, number]}
   */
  #randomNumberSet = [];

  constructor() {
    this.#createRandomNumber();
  }

  // Opponent-1 1부터 9까지의 각기 다른 수로 이루어진 3개의 숫자를 요소로 갖는 배열 반환
  #createRandomNumber() {
    while (this.#randomNumberSet.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#randomNumberSet.includes(number)) {
        this.#randomNumberSet.push(number);
      }
    }
  }

  // Opponent-2 플레이어의 input을 자신의 번호와 비교하여 볼 카운트를 계산.
  checkBallCount = (numberSet) => {
    let ballCounts = [0, 0, 0];

    numberSet.map((element, index) => {
      if (this.#randomNumberSet.indexOf(element) === index) ballCounts[0] += 1;
      else if (this.#randomNumberSet.includes(element)) ballCounts[1] += 1;
      else ballCounts[2] += 1;
    });

    return this.printBallCount(ballCounts);
  };

  printBallCount = ([strike, ball, out]) => {
    let ballCountMessage = '';

    if (ball > 0) ballCountMessage += `${ball}${BALL_COUNTS.BALL} `;
    if (strike > 0) ballCountMessage += `${strike}${BALL_COUNTS.STRIKE}`;
    if (out === 3) ballCountMessage += `${BALL_COUNTS.NOTHING}`;
    return [ballCountMessage, strike];
  };
}

export default Opponent;
