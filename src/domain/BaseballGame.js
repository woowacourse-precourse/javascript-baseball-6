import SETTING from "../constants/setting";

class BaseballGame {
  compare(userInput, computerInput) {
    const stringUserInput = userInput + '';
    const stringComputerInput = computerInput + '';

    const ballStrike = stringComputerInput.split('').reduce((acc, computerNumber, index) => {
      const userNumber = stringUserInput[index];

      if (userNumber === computerNumber) {
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
    const { strike, ball } = this.compare(userInput, computerInput);

    return {
      isEnd: strike === SETTING.RULE.SIZE,
      strike,
      ball,
    }
  }
}

export default BaseballGame;