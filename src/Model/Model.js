import { Random } from "@woowacourse/mission-utils";

class Model {
  makeComputerRandomNumber() {
    const computerRandomNumber = [];

    while (computerRandomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!computerRandomNumber.includes(number)) {
        computerRandomNumber.push(number);
      }
    }

    return computerRandomNumber;
  }
}

export default Model;
