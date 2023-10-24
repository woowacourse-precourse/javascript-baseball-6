import { Console, Random } from "@woowacourse/mission-utils";

// 숫자 야구의 자릿수
export const DIGIT = 3;

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

class Player {
  async setPlayerNumber() {
    const response = await IOHelper.readLine("숫자를 입력해주세요 : ");

    const regex = /^[1-9]*$/;
    if (!regex.test(response)) {
      throw new Error("[ERROR] 1부터 9까지의 수만 입력할 수 있습니다.");
    }
    if (response.length !== DIGIT) {
      throw new Error(`[ERROR] ${DIGIT}자리의 수만 입력할 수 있습니다.`);
    }
    if (new Set(response).size !== DIGIT) {
      throw new Error("[ERROR] 서로 다른 수만 입력할 수 있습니다.");
    }

    this.playerNumber = response.split("").map(Number);
  }
}

export class Computer {
  setComputerNumber() {
    this.computerNumber = IOHelper.getRandomNumbers(1, 9, DIGIT);
  }
}

class App {
  constructor() {
    IOHelper.printMessage("숫자 야구 게임을 시작합니다.");
    this.player = new Player();
    this.computer = new Computer();
  }

  async play() {}
}

export default App;
