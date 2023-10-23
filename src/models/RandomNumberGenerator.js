import { Random } from "@woowacourse/mission-utils";
import { GAME_CONTROL } from "../constants/Constants.js";

class RandomNumberGenerator {

  #computerNumber;

  constructor() {
    this.#computerNumber = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const digitsArray = new Set();

    while (digitsArray.size < GAME_CONTROL.LIMIT_LENGTH) {
      const randomNumber = Random.pickNumberInRange(GAME_CONTROL.START_SCOPE, GAME_CONTROL.END_SCOPE);
      digitsArray.add(randomNumber);
    }

    return parseInt([...digitsArray].join(''), 10);
  }

  getComputerNumber() {
    return this.#computerNumber;
  }

  initComputerNumber() {
    this.#computerNumber = this.generateRandomNumbers();
  }
}

export default RandomNumberGenerator;