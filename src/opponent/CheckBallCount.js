import { BALL_COUNTS } from '../../constants/index.js';

class CheckBallCount {
  /**
   * 👾 Opponent-2: 플레이어의 input을 자신의 번호와 비교하여 볼 카운트를 계산한다.
   * @param {[number, number, number]} playerInput
   * @param {[number, number, number]} answer
   * @returns
   */
  static calculateBallCount(playerInput, answer) {
    const ballCounts = [0, 0, 0];

    playerInput.map((element, index) => {
      if (answer.indexOf(element) === index) ballCounts[0] += 1;
      else if (answer.includes(element)) ballCounts[1] += 1;
      else ballCounts[2] += 1;
    });

    return this.formatBallCountMessage(ballCounts);
  }

  /**
   * 👾 Opponent-3: 계산한 볼 카운트의 메시지를 만들고 strike 개수와 함께 return한다.
   * @param {[number, number, number]} param0
   * @returns
   */
  static formatBallCountMessage([strike, ball, out]) {
    let ballCountMessage = '';

    if (ball > 0) ballCountMessage += `${ball}${BALL_COUNTS.ball} `;
    if (strike > 0) ballCountMessage += `${strike}${BALL_COUNTS.strike}`;
    if (out === 3) ballCountMessage += `${BALL_COUNTS.nothing}`;

    return [ballCountMessage, strike];
  }
}

export default CheckBallCount;
