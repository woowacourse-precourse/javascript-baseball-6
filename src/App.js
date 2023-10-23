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

        const strike = this.checkStrike(this.userInput, this.computerNumbers);
        const ball = this.checkBall(this.userInput, this.computerNumbers);
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
    if (!checkNumberRange(userInput)) {
      throw new Error("[ERROR] 1~9 사이의 숫자만 입력해주세요.");
    }
    if (!checkIsDiff(userInput)) {
      throw new Error("[ERROR] 중복되지 않은 숫자를 입력해주세요.");
    }
    return true;
  }

  checkStrike(userInput, computerNumbers) {
    let strike = 0;
    for (let i = 0; i < userInput.length; i++) {
      console.log(userInput[i], computerNumbers[i]);
      if (Number(userInput[i]) === computerNumbers[i]) {
        strike++;
      }
    }
    return strike;
  }

  checkBall(userInput, computerNumbers) {
    let ball = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (computerNumbers.includes(Number(userInput[i]))) {
        ball++;
      }
    }
    return ball;
  }
}

const baseballGame = new BaseballGame();
baseballGame.play();
