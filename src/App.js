import { Console, Random } from "@woowacourse/mission-utils";
import Computer from "./modules/Computer";

export default class App {
  constructor() {
    this.isReplaying = true;
    this.computer = new Computer();
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.isReplaying) {
      await this.compareNumbers();
    }
  }

  async getUserNumber() {
    Console.print("숫자를 입력해주세요 : ");
    const playerInput = await Console.readLineAsync("");

    if (playerInput.length !== 3) {
      throw new Error("[ERROR] 숫자는 3자리여야 합니다.");
    } else if (playerInput.includes("0")) {
      throw new Error("[ERROR] 숫자에 0이 포함되어 있습니다.");
    } else if (playerInput.split("").some((num) => isNaN(num))) {
      throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
    } else if (
      playerInput.split("").some((num, index, arr) => arr.indexOf(num) !== index)
    ) {
      throw new Error("[ERROR] 숫자가 중복되어 있습니다.");
    } else if (playerInput.includes(" ")) {
      throw new Error("[ERROR] 숫자에 공백이 포함되어 있습니다.");
    }
    return playerInput;
  }

  async getComputerNumber() {
    return this.computer.getComputerNumber();
  }

  async compareNumbers() {
    let correctPositionCount = 0;
    const machineGeneratedNumber = await this.getComputerNumber();

    while (correctPositionCount !== 3) {
      const playerInput = await this.getUserNumber();
      correctPositionCount = 0;
      let correctDigitCount = 0;

      for (let i = 0; i < 3; i++) {
        if (playerInput[i] === machineGeneratedNumber[i]) {
          correctPositionCount++;
        } else if (machineGeneratedNumber.includes(playerInput[i])) {
          correctDigitCount++;
        }
      }

      this.printHint(correctDigitCount, correctPositionCount);

      if (correctPositionCount === 3) {
        await this.isReplay();
      }
    }
  }

  printHint(ball, strike) {
    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
    } else if (ball === 0 && strike !== 0) {
      Console.print(`${strike}스트라이크`);
    } else if (ball !== 0 && strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  async isReplay() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    const userChoice = await Console.readLineAsync("");

    if (userChoice === "1") {
      this.isReplaying = true;
    } else if (userChoice === "2") {
      this.isReplaying = false;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

