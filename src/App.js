import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  constructor() {
    this.numbers = this.getRandomNumbers();
    MissionUtils.Console.print(this.numbers);
  }

  getRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 3) {
      numbers.add(MissionUtils.Random.pickNumberInRange(1, 9))
    }
    return [...numbers];
  }
  
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
  }
}

export default App;
