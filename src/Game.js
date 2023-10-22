import { MissionUtils } from "@woowacourse/mission-utils";
import isInputValid from "./InputCheck.js";

class Game {
  constructor() {
    this.computer = [];
    while (this.computer.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(NUMBER)) {
        this.computer.push(NUMBER);
      }
    }
    MissionUtils.Console.print(this.computer);
  }

  async start() {
    try {
      this.user = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      isInputValid(this.user);
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }
}

export default Game;
