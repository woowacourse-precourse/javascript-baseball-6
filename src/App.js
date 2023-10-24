import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  getRandomNumber() {
    let computerNum = [];
    let tempNum = 0;
    while (computerNum.length < 3) {
      tempNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(tempNum)) {
        computerNum.push(tempNum);
      }
    }
    return computerNum;
  }

  async play() {}
}

export default App;
