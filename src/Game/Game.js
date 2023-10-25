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

  async start() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const answer = this.computer.generateAnswer();
    let input;

    while (true) {
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

      this.user.updateSelection(input);

      const result = Calculator.calculateResult(this.user.selection, answer);
      const resultMessage = Calculator.generateCalculatedResultMassage(
        result.balls,
        result.strikes
      );
      MissionUtils.Console.print(resultMessage);

      if (result.strikes === 3) {
        if (await RestartManager.askForRestart()) {
          this.start();
          break;
        }
        break;
      }
    }
  }
}

export default Game;
