import { MissionUtils } from "@woowacourse/mission-utils";
import { GameMessages } from "../constants/GameMessages.js";
import { ErrorMessages } from "../constants/ErrorMessages.js";
import GameLogic from "./GameLogic.js";
import Exception from "../utils/Exception.js";

class GameController {
  constructor() {
    this.gameLogic = new GameLogic();
  }

  async getUserInput(question) {
    return await MissionUtils.Console.readLineAsync(question);
  }

  async startGame() {
    MissionUtils.Console.print(GameMessages.START_GAME);
    await this.runGame();
  }

  async runGame() {
    let computerNumber = this.gameLogic.createComputerNumber();
    let userResult = '';

    while(true) {
      const userNumber = await this.getUserInput(GameMessages.NUMBER_INPUT);

      Exception.userNumberException(userNumber);

      const userNumberArray = userNumber.split('').map(Number);

      userResult = this.gameLogic.compareNumbers(computerNumber, userNumberArray);
      MissionUtils.Console.print(userResult);

      if (userResult === '3스트라이크') {
        return this.strike();
      }
    }
  }

  strike() {
    MissionUtils.Console.print(GameMessages.END_GAME);
    return this.restartGame();
  }

  async restartGame() {
    const answer = await this.getUserInput(GameMessages.RETRY_GAME_OR_END_GAME);

    if (answer === '1') {
      return this.runGame();
    } else if (answer === '2') {
      return false;
    } else {
      throw new Error(ErrorMessages.INVALID_END_MESSAGE);
    }
  }
}

export default GameController;