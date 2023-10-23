import { Console } from "@woowacourse/mission-utils";
import generateNumber from "./generateNumber.js";
import strike from "./strike.js";
import ball from "./ball.js";
import validateNumber from "./validateNumber.js";

class App {
  async play() {
    let restart = "1";
    let computer = generateNumber();

    Console.print("숫자 야구 게임을  시작합니다.");

    while (restart === "1") {
      const user_input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (!validateNumber(user_input)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      const ball_count = ball(user_input, computer, "볼");
      const strike_count = strike(user_input, computer, "스트라이크");
      let message = ball_count + strike_count;

      if (message == "") {
        message = "낫싱";
      }

      if (strike_count == "3스트라이크") {
        Console.print(strike_count);
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

        restart = await Console.readLineAsync("");

        if (restart === "1") {
          computer = generateNumber();
          Console.print("숫자 야구 게임을  시작합니다.");
        } else if (restart !== "2") {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      } else {
        Console.print(message);
      }
    }
  }
}

export default App;
