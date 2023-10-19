import { Random, Console } from "@woowacourse/mission-utils";

import { messages } from "./const.js";

class BaseballGame {
  constructor() {
    Console.print(messages.GAME_START);
    this.computerNum = this.getComputerNum();
  }

  async play() {
    try {
      const userNum = await this.getUserNum();

      Console.print(this.computerNum);
    } catch (error) {
      throw error;
    }
  }

  async getUserNum() {
    let input;
    try {
      input = await Console.readLineAsync(messages.INPUT_NUMBER);
      this.checkValidation(input);
    } catch (error) {
      throw error;
    }
    return input;
  }

  checkValidation(input) {
    const uniqueInput = new Set(input);
    if (parseInt(input) !== Number(input))
      throw new Error(messages.INVALID_NOT_NUM);
    if (input.length !== 3) throw new Error(messages.INVALID_LENGTH);
    if (input.includes(0)) throw new Error(messages.INVALID_HAS_ZERO);
    if (Number(input) < 0) throw new Error(messages.INVALID_NEGATIVE_NUM);
    if (uniqueInput.size !== 3)
      throw new Error(messages.INVALID_HAS_UNIQUE_NUM);
  }

  getComputerNum() {
    let num = [];
    while (num.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!num.includes(number)) {
        num.push(number);
      }
    }
    return num;
  }
}

export default BaseballGame;
