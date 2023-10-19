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

      const result = this.getGameResult(this.computerNum, userNum);
      Console.print(result);
      Console.print(this.printGameResult(result));
      if (result.strikeCount !== 3) await this.play();
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

  getGameResult(computerNum, userNum) {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNum[i] === Number(userNum[i])) {
        strikeCount += 1;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (userNum.includes(computerNum[i])) {
        ballCount += 1;
      }
    }

    ballCount = ballCount - strikeCount;
    return { strikeCount, ballCount };
  }

  printGameResult({ strikeCount, ballCount }) {
    Console.print(strikeCount);
    Console.print(ballCount);
    let result = "";
    if (strikeCount === 0 && ballCount === 0) result = "낫싱";
    if (ballCount !== 0) {
      result += `${ballCount}볼 `;
    }
    if (strikeCount !== 0) {
      result += `${strikeCount}스트라이크 `;
    }
    return result;
  }
}

export default BaseballGame;
