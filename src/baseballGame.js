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

      //   try {
      //     this.validateGuess(guess);
      //   } catch (error) {
      //     throw new Error(error.message);
      //   }

      this.getHint(guess);
    }

    Console.print(MESSAGES.CORRECT_NUMBER);
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

  //   validateGuess(guess) {
  //     const threeDigitsPattern = /^\d{3}$/;
  //     const oneToNinePattern = /^[1-9]+$/;
  //     const hasDuplicatePattern = /(.)\1/;

  //     if (!threeDigitsPattern.test(guess)) {
  //       throw new Error(MESSAGES.INPUT_NUMBER_LENGTH_ERROR);
  //     }

  //     if (!oneToNinePattern.test(guess)) {
  //       throw new Error(MESSAGES.INPUT_NUMBER_RANGE_ERROR);
  //     }

  //     if (hasDuplicatePattern.test(guess)) {
  //       throw new Error(MESSAGES.INPUT_NUMBER_DUPLICATION_ERROR);
  //     }
  //   }
}

export default BaseballGame;
