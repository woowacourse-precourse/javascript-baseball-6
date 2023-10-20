import { MissionUtils, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    console.log(answer);
  }
}

export default App;
