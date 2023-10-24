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

  async play() {
    this.computer.setComputerNumber();
    while (true) {
      await this.player.setPlayerNumber();
      const [ball, strike] = this.compareNumber();
      const isAllStrike = this.getResult([ball, strike]);
      if (isAllStrike) {
        IOHelper.printMessage(
          `${DIGIT}개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        IOHelper.printMessage(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        const response = await IOHelper.readLine("");
        if (response !== "1" && response !== "2") {
          throw new Error("[ERROR] 1 또는 2만 입력할 수 있습니다.");
        }
        if (response === "1") {
          this.computer.setComputerNumber();
          continue;
        }
        if (response === "2") {
          break;
        }
      }
    }
  }

  compareNumber() {
    const computerNumber = this.computer.computerNumber;
    const playerNumber = this.player.playerNumber;
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < computerNumber.length; i++) {
      if (computerNumber[i] === playerNumber[i]) {
        strike += 1;
      }
      if (
        computerNumber[i] !== playerNumber[i] &&
        computerNumber.includes(playerNumber[i])
      ) {
        ball += 1;
      }
    }

    return [ball, strike];
  }

  getResult(result) {
    const [ball, strike] = result;

    if (ball === 0 && strike === 0) {
      IOHelper.printMessage(`낫싱`);
    }
    if (ball > 0 && strike === 0) {
      IOHelper.printMessage(`${ball}볼`);
    }
    if (strike > 0 && ball === 0) {
      IOHelper.printMessage(`${strike}스트라이크`);
    }
    if (ball > 0 && strike > 0) {
      IOHelper.printMessage(`${ball}볼 ${strike}스트라이크`);
    }

    return strike === DIGIT;
  }
}

export default App;
