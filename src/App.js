import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  pickRandomNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const computer = this.pickRandomNumber();
    const isGameRunning = true;

    while (isGameRunning) {
      const user = await Console.readLineAsync("숫자를 입력해주세요: ");
    }
  }
}

export default App;
