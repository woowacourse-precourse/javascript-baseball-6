import { Console,MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.computerNumbers = this.computerNumbers();
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.print(this.computerNumbers)
  }

  computerNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }
}

const app = new App();

app.play();

export default App;
