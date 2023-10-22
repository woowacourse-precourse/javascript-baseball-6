/** @format */

import {
  checkIsDiff,
  checkIsNumbers,
  checkLength,
  checkNumberRange,
} from "./validation.js";

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
      try {
        this.userInput = await this.getUserInput();
        this.checkUserInput(this.userInput);
      } catch (error) {
        Console.print(error.message);
        return;
      }
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

  async getUserInput() {
    const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    return userInput;
  }

  checkUserInput(userInput) {
    if (!checkLength(userInput)) {
      throw new Error("[ERROR] 3자리 숫자를 입력해주세요.");
    }
    if (!checkIsNumbers(userInput)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }

    return true;
  }
}

const baseballGame = new BaseballGame();
baseballGame.play();
