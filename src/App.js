import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {}
  constructor() {
    this.computerNumber = [];
  }
  /**
   * 컴퓨터 번호 랜덤 생성
   */
  makeComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    this.computerNumber = [...computer];
  }
  /**
   * 첫 게임 시작
   */
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.makeComputerNumber();
  }
}

export default App;
