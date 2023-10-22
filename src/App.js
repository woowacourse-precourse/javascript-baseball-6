/** @format */

import { Console, Random } from "@woowacourse/mission-utils";

export default class BaseballGame {
  play() {
    this.start();
  }

  async start() {
    this.computerNumbers = this.generateRandomNumbers();
    // Console.print(this.computerNumbers); // 테스트용
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

const baseballGame = new BaseballGame();
baseballGame.play();
