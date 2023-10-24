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

  getScore() {
    const { computerNumber, userNumber } = this.model;
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < computerNumber.length; i++) {
      const index = computerNumber.indexOf(userNumber[i]);
      if (index === i) strike++;
      else if (index > -1) ball++;
    }
    return [ball, strike];
  }

  scoreToString(ball, strike) {
    let score = "";
    if (ball === 0 && strike === 0) score = "낫싱";
    if (ball > 0) score += ball + "볼 ";
    if (strike > 0) score += strike + "스트라이크";
    return score;
  }
}
