import SetOfBalls from './SetOfBalls.js';

class Computer {
  targetNumbers;

  constructor(targetNumbers) {
    this.targetNumbers = targetNumbers ?? SetOfBalls.create();
    Object.freeze(this.targetNumbers);
  }

  compareNumbers(input) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < input.balls.length; i++) {
      if (input.balls[i] === this.targetNumbers.balls[i]) {
        strike++;
      } else if (this.targetNumbers.balls.includes(input.balls[i])) {
        ball++;
      }
    }

    return { ball, strike };
  }
}

export default Computer;
