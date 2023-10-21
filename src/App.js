import { Console, Random, MissionUtils } from "@woowacourse/mission-utils";

class App {
  computerNum() {
    const computerNum = [];
    do {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(number)) {
        computerNum.push(number);
      }
    } while (computerNum.length !== 3);
    const computerBall = computerNum.join("");
    console.log(computerBall);
    return computerBall;
  }

  async play() {
    const computerBall = this.computerNum();
  }
}

export default App;
