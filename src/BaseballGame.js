import { Console } from '@woowacourse/mission-utils';
import Computer from './Generator.js';
import { isValidGameInputDuringGame } from './validator.js';
import { getHintToUser } from './hintMaker.js';
import { LOG_MESSAGE, HINT_MESSAGE, GAME_SELECT, ERROR_MESSAGE } from './constants.js';

class BaseballGame {
  constructor() {
    this.computer = new Computer();
  }

  async startGame() {
    await this.getUserInput();
  }

  async getUserInput() {
    const input = await Console.readLineAsync(LOG_MESSAGE.INPUT_NUMNER);
    this.handleUserInputDuringGame(input);
  }

  async recommendRestart() {
    await Console.print(LOG_MESSAGE.CORRECT_END);

    const input = await Console.readLineAsync(`${LOG_MESSAGE.RESTART_INPUT}\n`);
    this.handleUserInputEndGame(input);
  }

  handleUserInputDuringGame(input) {
    if (!isValidGameInputDuringGame(input)) {
      throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
    }

    const hintMessage = getHintToUser(this.computer.computerNumber, input);
    Console.print(hintMessage);

    if (hintMessage === HINT_MESSAGE.ALL_STRIKE) {
      this.recommendRestart();
      return;
    }
    this.getUserInput();
  }

  async handleUserInputEndGame(input) {
    const isValidGameInputEndGame = [GAME_SELECT.RESTART, GAME_SELECT.END];

    if (!isValidGameInputEndGame.includes(input)) {
      throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
    }
    // TODO: 주석 삭제 필요
    // eslint-disable-next-line default-case
    switch (input) {
      case GAME_SELECT.RESTART:
        this.restartGame();
        break;
      case GAME_SELECT.END:
        Console.print(LOG_MESSAGE.END_GAME);
        break;
    }
  }

  restartGame() {
    this.computer.generateNewCorrectNumber();
    this.startGame();
  }
}

export default BaseballGame;
