import { Random } from "@woowacourse/mission-utils";
import { GAME_CONDITION } from "../constants/conditions.js";

class ComputerNumberGenerator {

  #computerNumber;

  constructor() {
    this.#computerNumber = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const digitsArray = new Set();

    while (digitsArray.size < GAME_CONDITION.maxLength) {
      const randomNumber = Random.pickNumberInRange(GAME_CONDITION.startScope, GAME_CONDITION.endScope);
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

export default ComputerNumberGenerator;