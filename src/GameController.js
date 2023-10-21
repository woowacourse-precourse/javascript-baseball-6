import { RandomNumberGenerator } from "./utils/RandomNumberGenerator.js";
import { User } from "./User.js";
import { Console } from "@woowacourse/mission-utils";
export class GameController {
  constructor() {
    this.computer = RandomNumberGenerator.generateRandomNumber();
    this.user = new User();
  }

  async startGame() {
    const userInput = await this.user.inputAnswer();
    const strikeCount = this.getStrikeCount(userInput);
    const ballCount = this.getBallCount(userInput, strikeCount);

    this.checkGameSuccess(strikeCount, ballCount);
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
    if (ballCount !== 0) hint.push(`${ballCount}볼`);
    if (strikeCount !== 0) hint.push(`${strikeCount}스트라이크`);
    if (ballCount === 0 && strikeCount === 0) hint.push(`낫싱`);

    Console.print(hint.join(" "));
  }

  async checkGameSuccess(strikeCount, ballCount) {
    this.printHint(strikeCount, ballCount);
    if (strikeCount === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      const userInput = await this.user.inputRetry();
      if (userInput === "1") {
        // 다시 시작
      }
      if (userInput === "2") {
        // 종료
      }
    }
  }
}
