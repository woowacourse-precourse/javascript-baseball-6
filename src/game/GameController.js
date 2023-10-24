import { MissionUtils } from "@woowacourse/mission-utils";
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
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.runGame();
  }

  async runGame() {
    let computerNumber = this.gameLogic.createComputerNumber();
    let userResult = '';

    while(true) {
      const userNumber = await this.getUserInput('숫자를 입력해주세요 : ');

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
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    return this.restartGame();
  }

  async restartGame() {
    const answer = await this.getUserInput('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

    if (answer === '1') {
      return this.runGame();
    } else if (answer === '2') {
      return false;
    } else {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }
}

export default GameController;