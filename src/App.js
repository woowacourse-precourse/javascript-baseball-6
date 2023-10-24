import { Console, Random } from "@woowacourse/mission-utils";

class IOHelper {
  static printMessage(message) {
    Console.print(message);
  }
  static async readLine(question) {
    const response = await Console.readLineAsync(question);

    return response;
  }
  static getRandomNumbers(x, y, n) {
    const numbers = [];
    while (numbers.length < n) {
      const number = Random.pickNumberInRange(x, y);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }
}

class App {
  constructor() {
    IOHelper.printMessage("숫자 야구 게임을 시작합니다.");
  }

  async play() {}
}

export default App;
