import HintView from "../views/HintView";

export default class Compare {
  constructor(user, computer) {
    this.user = user;
    this.computer = computer;
  }

  async compareNumbers() {
    const computerNumber = await this.computer.getComputerNumber();
    let result = false;

    while (!result) {
      const userInput = await this.user.getNumber();
      result = this.checkGameResult(userInput, computerNumber);
    }

    return result;
  }

  checkGameResult(userInput, computerNumber) {
    const ballCount = this.getBallCount(userInput, computerNumber);
    const strikeCount = this.getStrikeCount(userInput, computerNumber);
    
    this.displayHint(ballCount, strikeCount);

    return strikeCount === 3;
  }

  getBallCount(userInput, computerNumber) {
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      if (userInput[i] !== computerNumber[i] && computerNumber.includes(userInput[i])) {
        ballCount++;
      }
    }

    return ballCount;
  }

  getStrikeCount(userInput, computerNumber) {
    let strikeCount = 0;

    for (let i = 0; i < 3; i++) {
      if (userInput[i] === computerNumber[i]) {
        strikeCount++;
      }
    }

    return strikeCount;
  }
  
  displayHint(ballCount, strikeCount) {
    HintView.printHintMessage(ballCount, strikeCount);
  }
}
