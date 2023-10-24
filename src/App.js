import { Random, Console } from "@woowacourse/mission-utils";
const START_MENT = "숫자 야구 게임을 시작합니다.";
const END_MENT = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const REPLAY_MENT = "게임을 새로 시작하려면 1, 종료하시려면 2를 입력하세요.";

class App {
  async play() {}
  constructor() {
    this.computerNumber = undefined;
    this.userNumber = undefined;
  }
    this.makeComputerNumber();
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
}

export default App;
