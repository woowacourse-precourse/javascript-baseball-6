import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "./message.js";

const RANDOM_MIN = 1;
const RANDOM_MAX = 9;

class BaseballGame {
  constructor() {
    this.computer = [];
    this.correct = false;
  }

  async start() {
    this.computer = this.generateRandomNumbers();

    while (!this.correct) {
      const guess = await Console.readLineAsync(MESSAGES.INPUT_NUMBER);
    }
  }

  generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const randomNumber = Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return [...numbers];
  }
}

export default BaseballGame;
