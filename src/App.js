import { Console } from "@woowacourse/mission-utils";
import isValidNumber from "./validation";
import gameUtils from "./gameUtil";

const { makeRandomNumber, checkNumber } = gameUtils;

class App {
  constructor() {
    this.first = true;
  }
  async play() {
    if (this.first) {
      Console.print("숫자 야구 게임을 시작합니다.");
    }
    const computer = makeRandomNumber();
    while (true) {
      const user = await Console.readLineAsync("숫자를 입력해 주세요 : ");
      isValidNumber(user);
      const result = checkNumber(computer, user);
      if (result.strike === 3) {
        const endChoice = await Console.readLineAsync(
          "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        if (endChoice == "1") {
          this.first = false;
          Console.print("게임 종료");
          this.play();
        } else if (endChoice == "2") {
          this.first = false;
          Console.print("게임 종료");
        } else {
          throw new Error("[ERROR] 1,2 중 하나를 입력하셔야 합니다.");
        }
      }
    }
  }
}

// const app = new App();
// app.play();
export default App;
