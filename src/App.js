import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async makeComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }

    return computerNumber;
  }

  async play() {
    let isStart = true;

    Console.print("숫자 야구 게임을 시작합니다.");
    while (isStart) {
      let isCorrect = false;
      const computerNumber = await this.makeComputerNumber();
    }
  }
}

export default App;
