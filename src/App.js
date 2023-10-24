import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answer = [];
  }

  generateRandomNumbers() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  async play() {
    this.generateRandomNumbers();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요: "
      );

      console.log("Received userInput:", userInput);

      if (!userInput || userInput.length !== 3 || isNaN(userInput)) {
        MissionUtils.Console.print(
          "[ERROR] 잘못된 입력입니다. 다시 입력해주세요."
        );
        continue;
      }

      const result = this.checkAnswer(userInput);

      if (result.strikes === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      } else {
        MissionUtils.Console.print(
          `${result.balls}볼 ${result.strikes}스트라이크`
        );
      }
    }
  }

  checkAnswer(input) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (input[i] === this.answer[i]) {
        strikes++;
      } else if (this.answer.includes(input[i])) {
        balls++;
      }
    }

    return {
      strikes: strikes,
      balls: balls,
    };
  }
}

export default App;
