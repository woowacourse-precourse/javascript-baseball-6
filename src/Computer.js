import SetOfBalls from './SetOfBalls.js';

class Computer {
  targetNumbers;

  constructor(targetNumbers) {
    this.targetNumbers = targetNumbers ?? SetOfBalls.create();
    Object.freeze(this.targetNumbers);
  }

  compareNumbers(userNumbers) {
    if (!userNumbers) {
      return null;
    }
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < userNumbers.balls.length; i++) {
      if (this.targetNumbers.balls[i] === userNumbers.balls[i]) {
        strike++;
      } else if (this.targetNumbers.balls.includes(userNumbers.balls[i])) {
        ball++;
      }
    }

    return this.formatResult(ball, strike);
  }

  formatResult(ball, strike) {
    if (strike > 0 && ball > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    } else if (strike > 0) {
      return `${strike}스트라이크`;
    } else if (ball > 0) {
      return `${ball}볼`;
    } else {
      return "낫싱";
    }
  }
}

export default Computer;
