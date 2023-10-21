import { RandomNumberGenerator } from "./utils/RandomNumberGenerator.js";
import { User } from "./User.js";
import { Console } from "@woowacourse/mission-utils";
export class GameController {
  constructor() {
    this.computer = RandomNumberGenerator.generateRandomNumber();
    this.user = new User();
  }

  async startGame() {
    const userAnswer = await this.user.inputAnswer();
    const strikeCount = this.getStrikeCount(userAnswer);
    const ballCount = this.getBallCount(userAnswer, strikeCount);

    this.printHint(strikeCount, ballCount);
  }

  getStrikeCount(userAnswer) {
    let count = 0;
    for (let i = 0; i < userAnswer.length; i++) {
      if (this.computer[i] === userAnswer[i]) {
        count++;
      }
    }
    return count;
  }

  getBallCount(userAnswer, strikeCount) {
    let count = 0;
    for (let i = 0; i < userAnswer.length; i++) {
      if (this.computer.includes(userAnswer[i])) {
        count++;
      }
    }
    return count - strikeCount;
  }

  printHint(strikeCount, ballCount) {
    const hint = [];
    if (ballCount !== 0) hint.push(`${ballCount}볼`);
    if (strikeCount !== 0) hint.push(`${strikeCount}스트라이크`);
    if (ballCount === 0 && strikeCount === 0) hint.push(`낫싱`);

    Console.print(hint.join(" "));
  }
}
