import { MissionUtils } from "@woowacourse/mission-utils";
import Computer from "../Computer/Computer.js";
import User from "../User/User.js";
import Validator from "./Validator.js";
import Calculator from "./Calculator.js";

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

      if (result.strikes === 3) break;
    }

    await MissionUtils.Console.print(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    const restartInput = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    switch (restartInput.trim()) {
      case "1":
        return this.start();
      case "2":
        MissionUtils.Console.print("게임을 종료합니다.");
        break;
      default:
        throw new Error("잘못된 값을 입력하였습니다.");
    }
  }
}

export default Game;
