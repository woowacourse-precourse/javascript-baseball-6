import { Console, MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    // 정답 값 랜덤으로 생성하기
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9).toString();
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
  }
}

export default App;
