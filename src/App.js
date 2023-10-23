import { Console } from "@woowacourse/mission-utils";
class App {
  conputer = [];

  initComputer() {
    this.computer = [];
    while (this.computer.length < 3) {
      const newNumber = Random.pickNumberInRange(1, 9).toString();
      if (!this.computer.includes(newNumber)) {
        this.computer.push(newNumber);
      }
    }
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (1) {
      const input = await Console.readLineAsync();
      break;
    }
  }
}

export default App;
