/** @format */

import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants.js";
import {
  checkIsDiff,
  checkIsNumbers,
  checkLength,
  checkNumberRange,
} from "./validation.js";

import { Console, Random } from "@woowacourse/mission-utils";

export default class BaseballGame {
  async play() {
    Console.print(GAME_MESSAGE.GAME_START);

    let playing = true;

    while (playing) {
      playing = await this.start();
    }

    return playing;
  }

  async start() {
    this.computerNumbers = this.generateRandomNumbers();

    let isCorrect = false;

    while (!isCorrect) {
      try {
        this.userInput = await Console.readLineAsync(GAME_MESSAGE.INPUT_NUMBER);
        this.checkUserInput(this.userInput);

        const strike = this.getStrike(this.userInput, this.computerNumbers);
        const ball =
          this.getBall(this.userInput, this.computerNumbers) - strike;

        isCorrect = this.checkResult(strike, ball);
      } catch (error) {
        Console.print(error.message);
        throw error;
      }
    }

    const renew = await Console.readLineAsync(GAME_MESSAGE.GAME_RESTART);

    if (renew === "1") {
      return true;
    } else if (renew === "2") {
      return false;
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

  checkUserInput(userInput) {
    if (!checkLength(userInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    }
    if (!checkIsNumbers(userInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
    if (!checkNumberRange(userInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_RANGE);
    }
    if (!checkIsDiff(userInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE);
    }
    return true;
  }

  getStrike(userInput, computerNumbers) {
    let strike = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (Number(userInput[i]) === computerNumbers[i]) {
        strike++;
      }
    }
    return strike;
  }

  getBall(userInput, computerNumbers) {
    let ball = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (computerNumbers.includes(Number(userInput[i]))) {
        ball++;
      }
    }
    return ball;
  }

  checkResult(strike, ball) {
    if (strike === 3) {
      Console.print(`${strike}스트라이크`);
      Console.print(GAME_MESSAGE.GAME_END);
      return true;
    }

    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else {
      const ballResult = ball ? `${ball}볼` : "";
      const strikeResult = strike ? `${strike}스트라이크` : "";
      Console.print(`${ballResult} ${strikeResult}`.trim());
    }

    return false;
  }
}

const baseballGame = new BaseballGame();
baseballGame.play();
