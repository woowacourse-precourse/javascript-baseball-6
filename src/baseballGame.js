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

      console.log("input value : " + userNum);
    } catch (error) {
      throw error;
    }
  }

  async getUserNum() {
    let num;
    try {
      num = Console.readLineAsync(messages.INPUT_NUMBER);
    } catch (error) {
      throw new Error(error);
    }
    return num;
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
