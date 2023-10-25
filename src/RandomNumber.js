import { DELIMITER, NUMBER_LENGTH, RANGE_OF_RANDOM_NUMBER } from "./constants/MagicNumber.js";
import { Random } from "@woowacourse/mission-utils";

function generateRandomNumber() {
  const computer = [];
  while (computer.length < NUMBER_LENGTH) {
    const number = Random.pickNumberInRange(
      RANGE_OF_RANDOM_NUMBER.min,
      RANGE_OF_RANDOM_NUMBER.max);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join(DELIMITER);
}

export { generateRandomNumber };
