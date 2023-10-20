import { Random } from "@woowacourse/mission-utils";
import NUMBER from "./constant/NUMBER.js";

class Computer {
  createNumberArray() {
    let newNumberArray = [];

    while (newNumberArray.length < NUMBER.LENGTH) {
      const randomNumber = this.generateSingleDigitNaturalNumber();
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
