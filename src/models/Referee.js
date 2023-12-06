import { MESSAGE } from '../constants/index.js';

class Referee {
  #score = {
    strike: 0,
    ball: 0,
  };
  #gameResult;

  constructor(participants) {
    this.#compareNumbers(participants);
    this.#calculateScore();
  }

  /**
   * @param {{computer:Computer ; user:User }}participants
   */
  #compareNumbers(participants) {
    const { computer, user } = participants;
    const computerNumbers = computer.getNumbers();
    const userNumbers = user.getNumbers();

    computerNumbers.forEach((v, i) => {
      if (v === userNumbers[i]) {
        this.#score.strike += 1;
      } else if (userNumbers.includes(v)) {
        this.#score.ball += 1;
      }
    });
  }
  /**
   * 볼, 스트라이크 계산
   */
  #calculateScore() {
    let result = [];
    const { strike, ball } = this.#score;

    if (!strike && !ball) {
      result.push(MESSAGE.nothing);
    } else {
      ball && result.push(`${ball}${MESSAGE.ball}`);
      strike && result.push(`${strike}${MESSAGE.strike}`);
    }

    this.#gameResult = result.length === 1 ? result[0] : result.join(' ');
  }

  getGameResult() {
    return this.#gameResult;
  }
}

export default Referee;
