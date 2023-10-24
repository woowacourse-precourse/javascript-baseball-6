import pickNumbers from './utils/pickNumbers.js';

class Computer {
  #computerNumbers;

  constructor() {
    this.#computerNumbers = pickNumbers();
  }

  checkBallCount(numberSet) {
    let ballCounts = [0, 0, 0];
    numberSet.map((value, index) => {
      if (this.#computerNumbers.indexOf(value) === index) {
        ballCounts[0] += 1;
      } else if (this.#computerNumbers.includes(value)) {
        ballCounts[1] += 1;
      } else {
        ballCounts[2] += 1;
      }
    });
    return this.generateBallCountMessage(ballCounts);
  }

  generateBallCountMessage([strike, ball, out]) {
    let ballCountMessage = '';

    if (ball > 0) ballCountMessage += `${ball}볼 `;
    if (strike > 0) ballCountMessage += `${strike}스트라이크`;
    if (out === 3) ballCountMessage += `낫싱`;

    return [ballCountMessage, strike];
  }
}

export default Computer;
