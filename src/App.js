import { MissionUtils, Console } from "@woowacourse/mission-utils";
class App {
  constructor(input, answer) {
    this.input = input;
    this.answer = answer;
  }
  async getNumber() {
    this.answer = MissionUtils.Random.pickNumberInRange(100, 999);
    return this.answer;
  }

}

export default App;
