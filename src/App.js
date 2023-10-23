import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}

  setComputerNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }
    return COMPUTER;
  }
}

export default App;
