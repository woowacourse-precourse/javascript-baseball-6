class BaseballGame {
  constructor(rule = { size, min, max }) {
    this.rule = rule;
  }

  result(userInput, computerInput) {
    const stringUserInput = userInput + '';
    const stringComputerInput = computerInput + '';

    return stringComputerInput.split('').reduce((acc, computerNumber, index) => {
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
  }

  getRule() {
    return this.rule;
  }

}

export default BaseballGame;