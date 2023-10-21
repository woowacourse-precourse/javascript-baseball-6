import { Random } from "@woowacourse/mission-utils";
import NUMBER from "./constant/NUMBER.js";

class Computer {
  constructor() {
    this.numberArray = [];
  }

  createNumberArray() {
    let newNumberArray = [];

    while (newNumberArray.length < NUMBER.LENGTH) {
      const randomNumber = this.generateSingleDigitNaturalNumber();
      if (newNumberArray.includes(randomNumber)) continue;
      newNumberArray.push(randomNumber);
    }

    this.numberArray = newNumberArray;
  }

  generateSingleDigitNaturalNumber() {
    return Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
  }
}

export default Computer;
