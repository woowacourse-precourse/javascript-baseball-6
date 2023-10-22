import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 게임 시작 전
  async play() {
    try {
      const computerNumber = this.generateGame();
      await this.game(computerNumber);
    } catch (error) {
      throw error;
    }
  }
  generateGame() {
    // 게임 제작
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    return computerNumber;
  }
  async game(number) {}
}

const app = new App();
app.play();

export default App;
