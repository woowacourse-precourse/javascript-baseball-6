import { Random } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "./utils/Constants.js";

class Balls {
  constructor() {
    this.randomNumbers = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const threeDigitNumber = [];
    while (threeDigitNumber.length < GAME.BALL_LENGTH) {
      const number = Random.pickNumberInRange(1, 9);
      if (!threeDigitNumber.includes(number)) {
        threeDigitNumber.push(number);
      }
    }
    return threeDigitNumber;
  }

  inputValidation(inputNumbers) {
    if (
      !(
        /^\d{3}$/.test(inputNumbers) &&
        new Set(inputNumbers).size === GAME.BALL_LENGTH
      )
    ) {
      throw new Error(ERROR.INVALID_BALL);
    }
  }

  calculateStrike(inputNumbers) {
    const guessNumbers = inputNumbers.split("").map(Number);
    let strikes = 0;

    for (let i = 0; i < GAME.BALL_LENGTH; i += 1) {
      if (guessNumbers[i] === this.randomNumbers[i]) {
        strikes += 1;
      }
    }
    return strikes;
  }

  calculateBall(inputNumbers) {
    const guessNumbers = inputNumbers.split("").map(Number);
    let balls = 0;
    for (let i = 0; i < GAME.BALL_LENGTH; i += 1) {
      if (
        guessNumbers[i] !== this.randomNumbers[i] &&
        this.randomNumbers.includes(guessNumbers[i])
      ) {
        balls += 1;
      }
    }
    return balls;
  }

  regenerateRandomNumber() {
    this.randomNumbers = this.generateRandomNumber();
  }
}
export default Balls;
