import { Random } from "@woowacourse/mission-utils";
import { validateComputerNumber } from "../utils/validateNumber.js";

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
}

export default Model;
