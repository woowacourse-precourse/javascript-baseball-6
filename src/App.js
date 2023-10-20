import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let computer = "";
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer += number;
      }
    }
    // console.log(computer, "출력값");
  }
}

export default App;
