import { Console, Random } from "@woowacourse/mission-utils";

const RANDOM_MIN = 1;
const RANDOM_MAX = 9;

class BaseballGame {
  constructor() {
    this.computer = [];
  }

  async start() {
    this.computer = this.generateRandomNumbers();

    Console.print(this.computer);
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
