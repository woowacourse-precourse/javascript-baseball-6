import { MissionUtils } from "@woowacourse/mission-utils";
import Computer from "../Computer/Computer.js";
import User from "../User/User.js";
import Validator from "./Validator.js";
import Calculator from "./Calculator.js";
import RestartManager from "./RestartManager.js";

class Game {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
  }

  async getValidInput() {
    let input;
    do {
      try {
        input = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        Validator.isValidInput(input);
      } catch (error) {
        throw error;
      }
    } while (!Validator.isValidInput(input));
    return input;
  }

  async playRound(answer) {
    const input = await this.getValidInput();
    this.user.updateSelection(input);
    const result = Calculator.calculateResult(this.user.selection, answer);
    return result;
  }

  async start() {
    while (true) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      const answer = this.computer.generateAnswer();
      let result;

      do {
        result = await this.playRound(answer);
        const resultMessage = Calculator.generateCalculatedResultMassage(
          result.balls,
          result.strikes
        );
        MissionUtils.Console.print(resultMessage);
      } while (result.strikes !== 3);

      if (await RestartManager.askForRestart()) continue; // 재시작
      break; // 종료
    }
  }
}

export default Game;
