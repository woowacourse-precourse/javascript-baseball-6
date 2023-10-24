import { INFO_MESSAGE } from "./constants/messages.js";
import { MAGIC_NUM } from "./constants/magicNums.js";
import { inputValidator, restartValidator } from "./utils/validators.js";
import { generateRandomNum } from "./utils/generateRandomNum.js";

import { Console } from "@woowacourse/mission-utils";

export default class App {
  async startNewGame() {
    try {
      return await this.runGame(generateRandomNum());
    } catch (error) {
      throw error;
    }
  }

  async runGame(answer) {
    try {
      const userGuessInput = await this.getUserInput();
      inputValidator(userGuessInput);
      const result = this.compareNums(userGuessInput, answer);
      this.printResult(result);
      if (result.strike === MAGIC_NUM.MAX_BASEBALL_NUM) {
        return this.getRestartInput();
      } else return this.runGame(answer);
    } catch (error) {
      throw error;
    }
  }

  async getUserInput() {
    try {
      return await Console.readLineAsync(INFO_MESSAGE.INPUT_NUM_MESSAGE);
    } catch (error) {
      throw error;
    }
  }

  compareNums(userGuessInput, answer) {
    const count = { ball: 0, strike: 0 };
    const arrayedUserGuessInput = userGuessInput
      .split("")
      .map((num) => Number(num));
    arrayedUserGuessInput.forEach((userNum, idx) => {
      if (answer.includes(userNum) && answer.indexOf(userNum) === idx) {
        count.strike++;
      } else if (answer.includes(userNum)) count.ball++;
    });
    return count;
  }

  printResult({ ball, strike }) {
    if (ball || strike) {
      Console.print(
        (ball ? `${ball}볼 ` : "") + (strike ? `${strike}스트라이크` : "")
      );
    } else Console.print(INFO_MESSAGE.NOTHING_MESSAGE);
  }

  async getRestartInput() {
    try {
      Console.print(INFO_MESSAGE.WIN_MESSAGE + " " + INFO_MESSAGE.END_MESSAGE);
      Console.print(INFO_MESSAGE.RESTART_MESSAGE);
      const restartInput = await Console.readLineAsync("");
      restartValidator(restartInput);
      if (Number(restartInput) === MAGIC_NUM.NEW_GAME_NUM) {
        return await this.startNewGame();
      }
    } catch (error) {
      throw error;
    }
  }

  printStart() {
    Console.print(INFO_MESSAGE.START_MESSAGE);
  }

  async play() {
    try {
      this.printStart();
      await this.startNewGame();
    } catch (error) {
      throw error;
    }
  }
}
