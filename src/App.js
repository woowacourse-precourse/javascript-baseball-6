/** @format */

import { Console, Random } from "@woowacourse/mission-utils";

export default class BaseballGame {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.start();
  }

  async start() {
    this.computerNumbers = this.generateRandomNumbers();

    let correct = false;

    while (!correct) {
      this.userInput = await this.getUserInput();
      Console.print(this.userInput);
    }
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

  getUserInput() {
    const userInput = Console.readLineAsync("숫자를 입력해주세요 : ");
    return userInput;
  }
}

const baseballGame = new BaseballGame();
baseballGame.play();
