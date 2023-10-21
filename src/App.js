import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 게임 시작 전
  async play() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      // 컴퓨터 숫자
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.game(computerNumber);
  }
  game(number) {}
}

const app = new App();
app.play();

export default App;
