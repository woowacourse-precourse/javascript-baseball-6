import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";
import Computer from "../Computer/Computer.js";

class BaseballGame {
  constructor() {
    this.computer = new Computer();
  }

  async startGame() {
    await this.judgeGameNumber();
  }

  async getGameNumberInput() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_GAME);
    return input;
  }

  async getRestartNumberInput() {
    Console.print(MESSAGE.OUTPUT_GAME_END);
    const input = await Console.readLineAsync(MESSAGE.OUTPUT_RESTART);
    return input;
  }

  async judgeGameNumber() {
    const input = await this.getGameNumberInput();
    if (!this.computer.checkInputValid(input)) {
      throw new Error(MESSAGE.ERROR_NOT_VALID_GAME);
    }
    const hint = this.computer.createHint(input);
    Console.print(hint);

    if (hint === MESSAGE.CORRECT_ANSWER_HINT) {
      await this.restart();
      return Promise.resolve();
    }
    return this.judgeGameNumber();
  }

  async restart() {
    const input = await this.getRestartNumberInput();

    switch (input) {
      case '1':
        this.computer.initAnswer();
        await this.judgeGameNumber();
        break;
      case '2':
        break;
      default:
        throw new Error(MESSAGE.ERROR_NOT_VALID_RESTART);
    }
  }
}

export default BaseballGame;