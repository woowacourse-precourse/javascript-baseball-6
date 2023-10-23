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

    }
  }
}

export default GameController;