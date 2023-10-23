import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.randomNumbers = [];
  }

  generateRandomNumbers() {
    // 3개의 난수를 생성하는 랜덤 숫자 생성
  }
  async play() {
    this.generateRandomNumbers();

    while (true) {
      const userInput = await MissionUtils.Console.readLineAsync("숫자 입력");

      if (userInput.length !== 3) {
        throw new Error("error");
      }

      const result = this.compareNumbers(userInput);

      MissionUtils.Console.print(result);

      if (result === "스트라이크") {
        MissionUtils.Console.print("게임 종료");
        break;
      }
    }
  }

  compareNumbers(userInput) {}
}

export default App;
