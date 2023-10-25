import { errorMessage } from "./Message";

export default class ValidatedBalls {
  #BALL_NUMBERS_SIZE = 3;
  ballsArray;

  constructor(ballString) {
    this.#validationSize(ballString);
    this.#validationDuplicate(ballString);
    this.#validationRange(ballString);
    this.ballsArray = ballString.split("");
  }

  #validationSize(ballString) {
    if (
      !ballString ||
      ballString === "" ||
      ballString.length !== this.#BALL_NUMBERS_SIZE
    ) {
      throw new Error(errorMessage.INVALID_INPUT);
    }
  }

  #validationDuplicate(ballString) {
    if (ballString.length !== new Set(ballString).size) {
      throw new Error(errorMessage.INVALID_SIZE);
    }
  }

  #validationRange(ballString) {
    if (!/^[1-9]+$/.test(ballString)) {
      throw new Error(errorMessage.OUT_OF_RANGE_BALLS);
    }
  }
}
