import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = this.generateComputer();
  }

  //  서로 다른 임의의 수 3개를 생성한다.
  generateComputer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    const computerString = computer.join("");
    MissionUtils.Console.print(`컴퓨터 생성 숫자: ${computerString}`);
    return computer;
  }

}

export default App;
