import HintView from "../utils/HintView";

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
      const ballCount = this.getBallCount(userInput, computerNumber);

      strikeCount = this.getStrikeCount(userInput, computerNumber);

      HintView.printHintMessage(ballCount, strikeCount);

      if (strikeCount === 3) {
        return true;
      }
    }

    return false;
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
}
