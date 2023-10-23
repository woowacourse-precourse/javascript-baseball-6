import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    // 컴퓨터가 생각하고 있는 랜덤값
    const computer = Random.pickUniqueNumbersInRange(1, 9, 3);
    const RandomNum = Number(computer.join(""));
  }
}

const app = new App();
app.play();

export default App;
