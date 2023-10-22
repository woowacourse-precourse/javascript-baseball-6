import { RandomNumberGenerator } from "./utils/RandomNumberGenerator.js";
import { User } from "./User.js";
import { Console } from "@woowacourse/mission-utils";
import * as m from "./constants/message.js";
import * as c from "./constants/const.js";
export class GameController {
  constructor() {
    this.computer = RandomNumberGenerator.generateRandomNumber();
    this.user = new User();
  }

  async startGame() {
    let isRunning = true;
    Console.print(m.START_MESSAGE);
    while (isRunning) {
      const userInput = await this.user.inputAnswer();
      const strikeCount = this.getStrikeCount(userInput);
      const ballCount = this.getBallCount(userInput, strikeCount);

      isRunning = await this.checkGameSuccess(strikeCount, ballCount);
    }
  }

  getStrikeCount(userInput) {
    let count = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (this.computer[i] === userInput[i]) {
        count++;
      }
    }
    return count;
  }

  getBallCount(userInput, strikeCount) {
    let count = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (this.computer.includes(userInput[i])) {
        count++;
      }
    }
    return count - strikeCount;
  }

  printHint(strikeCount, ballCount) {
    const hint = [];
    if (ballCount !== 0) hint.push(`${ballCount}${c.BALL}`);
    if (strikeCount !== 0) hint.push(`${strikeCount}${c.STRIKE}`);
    if (ballCount === 0 && strikeCount === 0) hint.push(`${c.NOTHING}`);

    Console.print(hint.join(" "));
  }

  async checkGameSuccess(strikeCount, ballCount) {
    this.printHint(strikeCount, ballCount);
    if (strikeCount === c.NUMBER_LENGTH) {
      Console.print(m.SUCCESS_MESSAGE);
      const userInput = await this.user.inputRetry();
      if (userInput === c.RESTART_INPUT) {
        this.restartGame();
      }
      if (userInput === c.QUIT_INPUT) {
        return false;
      }
    }
    return true;
  }

  restartGame() {
    this.computer = RandomNumberGenerator.generateRandomNumber();
  }
}
