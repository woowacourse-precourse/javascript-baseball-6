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
    let strikeCount = 0;
    const computerNumber = await this.getComputerNumber();

    while (strikeCount !== 3) {
      const userInput = await this.user.getNumber();
      let ballCount = 0;

      for (let i = 0; i < 3; i++) {
        if (userInput[i] === computerNumber[i]) {
          strikeCount++;
        } else if (computerNumber.includes(userInput[i])) {
          ballCount++;
        }
      }

      this.printResult(ballCount, strikeCount);

      if (strikeCount === 3) {
        return true; 
      }

      strikeCount = 0;
    }

    return false;
  }

  printResult(ball, strike) {
    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
}
