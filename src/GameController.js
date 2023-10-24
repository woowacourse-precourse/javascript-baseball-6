import { Random } from "@woowacourse/mission-utils";

export default class GameController {
  constructor(gameModel) {
    this.model = gameModel;
  }

  updateRandomComputerNumber() {
    const computerNumber = this.generateRandomNumber();
    this.model.updateComputerNumber(computerNumber);
  }

  generateRandomNumber() {
    let computerNumber = "";
    while (computerNumber.length < 3) {
      const randomNum = Random.pickNumberInRange(1, 9);
      if (computerNumber.includes(randomNum) === false) computerNumber += randomNum;
    }
    return computerNumber;
  }
  inputValidation(input) {
    const isLengthValid = this.inputLengthCheck(input, 3);
    const isNumberValid = this.inputNumberCheck(input);
    const isUniqueValid = this.inputUniqueCheck(input);

    return isLengthValid && isNumberValid && isUniqueValid;
  }

  inputLengthCheck(input, length) {
    return input.length === length;
  }

  inputNumberCheck(input) {
    for (let i = 0; i < input.length; i++) {
      if (isNaN(+input[i])) return false;
    }
    return true;
  }

  inputUniqueCheck(input) {
    const inputSet = new Set(input);
    return input.length === inputSet.size;
  }
}
