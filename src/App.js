import { Console, Random } from "@woowacourse/mission-utils";

export default class App {
  constructor() {
    this.isReplaying = true;
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
    const machineGeneratedNumber = [];
    while (machineGeneratedNumber.length < 3) {
      const randomDigit = Random.pickNumberInRange(1, 9);
      if (!machineGeneratedNumber.includes(randomDigit)) {
        machineGeneratedNumber.push(randomDigit);
      }
    }
    return machineGeneratedNumber.join("");
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
}

