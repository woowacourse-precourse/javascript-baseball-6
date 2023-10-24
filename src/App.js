import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.isContinue = true;
    this.computerInput = this.randomNumberGenerator();
  }

  randomNumberGenerator() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  async play() {}
}

export default App;
