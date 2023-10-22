import { Random } from "@woowacourse/mission-utils";
import { validateComputerNumber, validateInputNumber } from "../utils/validateNumber.js";

class Model {
  makeComputerRandomNumber() {
    const computerRandomNumbers = [];

    while (computerRandomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!computerRandomNumbers.includes(number)) {
        computerRandomNumbers.push(number);
      }
    }

    validateComputerNumber(computerRandomNumbers);

    return computerRandomNumbers;
  }

  compareNumbers(computerNumbers, userNumbersInput) {
    const userNumbers = this.changeUserNumbersArr(userNumbersInput);

    return this.checkCount(computerNumbers, userNumbers);
  }

  checkCount(computerNumbers, userNumbers) {
    let ball = 0;
    let strike = 0;

    computerNumbers.forEach((computerNum, i) => {
      userNumbers.includes(computerNum) && i !== userNumbers.indexOf(computerNum) ? (ball += 1) : "";
      userNumbers.includes(computerNum) && i === userNumbers.indexOf(computerNum) ? (strike += 1) : "";
    });

    return [ball, strike];
  }

  changeUserNumbersArr(userNumberInput) {
    let userNumbers = userNumberInput.split("");

    if (userNumbers.every(num => !isNaN(num))) {
      userNumbers = userNumbers.map(num => Number(num));
    }

    validateInputNumber(userNumbers);

    return userNumbers;
  }
}

export default Model;
