import { MissionUtils } from "@woowacourse/mission-utils";
import GameLogic from "./GameLogic.js";

class GameController {
  constructor() {
    this.gameLogic = new GameLogic();
  }

  async getUserInput(question) {
    const answer = await MissionUtils.Console.readLineAsync(question);
    if (answer === undefined) {
      throw new Error("[ERROR] 올바른 입력 형태가 아닙니다.");
    }
    return answer;
  }

  async startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.playGame();
  }

  async playGame() {
    let computerNumber = this.gameLogic.createComputerNumber();
    let userNumber = '';

    while(true) {
      const answer = await this.getUserInput('숫자를 입력해주세요 : ');

      const userNumberToString = String(answer);
      const mapfn = (arg) => Number(arg);
      const userNumberArray = Array.from(userNumberToString, mapfn);

      userNumber = this.gameLogic.checkNumber(computerNumber, userNumberArray);
      MissionUtils.Console.print(userNumber);

      if (userNumber === '3스트라이크') {
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
      return this.playGame();
    } else if (answer === '2') {
      return false;
    } else {
      throw new Error('[ERROR] 입력이 잘못된 형식입니다.');
    }
  }
}

export default GameController;