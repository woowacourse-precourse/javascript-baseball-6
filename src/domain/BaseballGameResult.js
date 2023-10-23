class BaseballGameResult {
  #ball;
  #strike;

  constructor(computerNumbers, userNumbers) {
    this.#ball = this.calculateBall(computerNumbers, userNumbers);
    this.#strike = this.calculateStrike(computerNumbers, userNumbers);
  }

  getResult() {
    const result = { ball: this.#ball, strike: this.#strike };
    return result;
  }

  calculateBall(computerNumbers, userNumbers) {
    let ball = 0;
    computerNumbers.forEach((computerNumber, idx) => {
      if (
        computerNumber !== userNumbers[idx] &&
        userNumbers.includes(computerNumber)
      ) {
        ball += 1;
      }
    });
    return ball;
  }

  calculateStrike(computerNumbers, userNumbers) {
    let strike = 0;
    computerNumbers.forEach((computerNumber, idx) => {
      if (computerNumber === userNumbers[idx]) {
        strike += 1;
      }
    });
    return strike;
  }
}

export default BaseballGameResult;
