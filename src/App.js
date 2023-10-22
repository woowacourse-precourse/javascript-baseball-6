import { Console, Random, MissionUtils } from "@woowacourse/mission-utils";

class App {
  Get_Random_Number() {
    const RandomNumbers = [];
    while (RandomNumbers.length < 3) {
      const Number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!RandomNumbers.includes(Number)) {
        RandomNumbers.push(Number);
      }
    }
    return RandomNumbers;
  }

  async play() {}
}

export default App;
