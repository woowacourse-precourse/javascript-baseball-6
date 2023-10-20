import { Random } from "@woowacourse/mission-utils";
import NUMBER from "./constant/NUMBER.js";

class Computer {
  createNumbers() {
    let newNumberArray = [];

    while (newNumberArray.length < 3) {
      let randomNumber = this.generateSingleDigitNaturalNumber();

      if (newNumberArray.includes(randomNumber)) continue;
      newNumberArray.push(randomNumber);
    }

    return newNumberArray;
  }

  generateSingleDigitNaturalNumber() {
    return Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
  }
}

export default Computer;
