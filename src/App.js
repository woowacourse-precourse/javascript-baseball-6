import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    try {
      await this.gameStart();
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }
  async gameStart() {
    this.computerNumber = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const numbers = new Set();
    while (numbers.size < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      numbers.add(randomNumber);
    }
    return [...numbers];
  }
}

const app = new App();
app.play();
export default App;
