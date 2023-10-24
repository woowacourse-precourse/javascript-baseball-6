import { Console } from "@woowacourse/mission-utils";

export default class Compare {
  constructor(user, computer) {
    this.user = user;
    this.computer = computer;
  }

  async getComputerNumber() {
    return this.computer.getComputerNumber();
  }

  async compareNumbers() {
    let correctPositionCount = 0;
    const machineGeneratedNumber = await this.getComputerNumber();

    while (correctPositionCount !== 3) {
      const playerInput = await this.user.getNumber();
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
        return true; 
      }
    }

    return false;
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
