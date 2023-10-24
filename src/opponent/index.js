import { BALL_COUNTS } from '../../constants/index.js';
import randomNumSetGenerator from '../utils/RandomNumSetGenerator.js';

class Opponent {
  /**
   * 랜덤하게 결정된 서로 다른 3자리 수를 담은 정답 배열
   * @type {number[]}
   */
  #randomNumberSet = [];

  constructor() {
    this.#createRandomNumber();
  }

  // 👾 Opponent-1: 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.
  #createRandomNumber() {
    this.#randomNumberSet = randomNumSetGenerator();
  }

  /**
   * 👾 Opponent-2: 플레이어의 input을 자신의 번호와 비교하여 볼 카운트를 계산한다.
   * @param {[number, number, number]} numberSet
   * @returns
   */
  checkBallCount = (numberSet) => {
    const ballCounts = [0, 0, 0];

    numberSet.map((element, index) => {
      if (this.#randomNumberSet.indexOf(element) === index) ballCounts[0] += 1;
      else if (this.#randomNumberSet.includes(element)) ballCounts[1] += 1;
      else ballCounts[2] += 1;
    });

    return this.#formatBallCountMessage(ballCounts);
  };

  /**
   * 👾 Opponent-3: 계산한 볼 카운트의 메시지를 만들고 strike 개수와 함께 return한다.
   * @param {[number, number, number]} param0
   * @returns
   */
  #formatBallCountMessage = ([strike, ball, out]) => {
    let ballCountMessage = '';

    if (ball > 0) ballCountMessage += `${ball}${BALL_COUNTS.BALL} `;
    if (strike > 0) ballCountMessage += `${strike}${BALL_COUNTS.STRIKE}`;
    if (out === 3) ballCountMessage += `${BALL_COUNTS.NOTHING}`;

    return [ballCountMessage, strike];
  };
}

export default Opponent;
