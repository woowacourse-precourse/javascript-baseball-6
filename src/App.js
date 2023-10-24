import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // '숫자 야구 게임을 시작합니다'를 출력한다.
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");

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
