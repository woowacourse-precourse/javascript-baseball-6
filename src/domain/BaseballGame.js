import SETTING from "../constants/setting.js";

class BaseballGame {
  constructor() {
    this.isPlaying = false;
  }

  start() {
    this.isPlaying = true;
  }

  compare(userInput, computerInput) {
    const stringUserInput = userInput + '';
    const stringComputerInput = computerInput + '';

    const ballStrike = stringComputerInput.split('').reduce((acc, computerNumber, index) => {
      if (stringUserInput[index] === computerNumber) {
        acc.strike++;
        return acc;
      }

      if (stringUserInput.includes(computerNumber)) {
        acc.ball++;
        return acc;
      }

      return acc;
    }, { strike: 0, ball: 0 });

    return ballStrike;
  }

  result(userInput, computerInput) {
    const compareResult = this.compare(userInput, computerInput);

    if (this.isWin(compareResult.strike)) {
      this.end();
    }

    return compareResult;
  }

  isWin(strike) {
    return strike === SETTING.RULE.SIZE;
  }

  isRestart(answer) {
    return answer === SETTING.COMMAND.RESTART;
  }

  end() {
    this.isPlaying = false;
  }
}

export default BaseballGame;