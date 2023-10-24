import { Random } from "@woowacourse/mission-utils";
import { GAME_NUMBER } from "../constants/ConfigGame.js";

export default class Computer {
  #computerNumber;

  constructor() {
    this.createRandomNumber();
  }

  createRandomNumber() {
    const randomNumber = new Set();

    while (randomNumber.size < GAME_NUMBER.three) {
      const number = Random.pickNumberInRange(GAME_NUMBER.start, GAME_NUMBER.end);
      if (!randomNumber.has(number)) {
        randomNumber.add(number);
      }
    }
    this.#computerNumber = randomNumber;
  }

  getComputerNumber() {
    return this.#computerNumber;
  }
}
