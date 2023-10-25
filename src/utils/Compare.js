import { Console } from "@woowacourse/mission-utils";

export default class Compare {
  constructor(user, computer) {
    this.user = user;
    this.computer = computer;
  }

  async compareNumbers() {
    let strikeCount = 0;
    const computerNumber = await this.computer.getComputerNumber();

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

      this.printHintMessage(ballCount, strikeCount);

      if (strikeCount === 3) {
        return true; 
      }

      strikeCount = 0;
    }

    return false;
  }

  printHintMessage(ball, strike) {
    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
      return;
    }
    
    if (ball === 0) {
      Console.print(`${strike}스트라이크`);
      return;
    }
    
    if (strike === 0) {
      Console.print(`${ball}볼`);
      return;
    }

    Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}
