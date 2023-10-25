import { MissionUtils } from "@woowacourse/mission-utils";
import Computer from "./Computer/Computer.js";
import UserInput from "./UserInput/UserInput.js";

class App {
  constructor() {
    this.computer = new Computer();
    this.userInput = new UserInput();
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const userInput = await this.userInput.inputUser();
      const result = this.compareNum(userInput);

      MissionUtils.Console.print(result);

      if (result === '3스트라이크') {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        if (!(await this.userInput.restartOption())) {
          break;
        }
        this.computer = new Computer();
      }
    }
  }

  compareNum(userInput) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (userInput[i] === this.computer.number[i]) {
        strike++;
      } else if (this.computer.number.includes(userInput[i])) {
        ball++;
      }
    }

    if (strike > 0 && ball > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    } else if (strike > 0) {
      return `${strike}스트라이크`;
    } else if (ball > 0) {
      return `${ball}볼`;
    } else {
      return "낫싱";
    }
  }
}

export default App;
