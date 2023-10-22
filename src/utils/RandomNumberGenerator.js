import { Random } from "@woowacourse/mission-utils";
import * as c from "../constants/const.js";

export const RandomNumberGenerator = {
  generateRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < c.NUMBER_LENGTH) {
      const number = Random.pickNumberInRange(c.MIN_NUMBER, c.MAX_NUMBER);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    return randomNumber.join("");
  },
};
