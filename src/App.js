import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let strike = 0;
    let ball = 0;
    let result = "";

    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      let userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (userInput.length !== 3) {
        throw new Error("[ERROR] 3자리가 아닌 숫자를 입력했습니다.");
      } else if (isNaN(userInput)) {
        throw new Error("[ERROR] 숫자가 아닌 다른 무언가를 입력했습니다.");
      }

      let userArray = Array.from(userInput).map(Number);

      for (let i = 0; i < 3; i++) {
        if (computer[i] === userArray[i]) {
          strike++;
        } else if (computer.includes(userArray[i])) {
          ball++;
        }
      }

      if (ball !== 0) {
        result = result + `${ball}볼 `;
      }
      if (strike !== 0) {
        result = result + `${strike}스트라이크`;
      }
      if (ball === 0 && strike === 0) {
        result = "낫싱";
      }

      Console.print(result);

      if (strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        let decision = await Console.readLineAsync("");
        if (decision !== "1" && decision !== "2") {
          throw new Error("[ERROR] 잘못된 입력입니다.");
        } else if (decision === "1") {
          ball = 0;
          strike = 0;
          result = "";

          continue;
        } else if (decision === "2") {
          break;
        }
      }

      ball = 0;
      strike = 0;
      result = "";
    }
  }
}

const app = new App();
app.play();

export default App;
