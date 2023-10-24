import { Random } from "@woowacourse/mission-utils";

export default function getRandomNumBer(digitNumber) {
  if (!Number.isInteger(digitNumber)) {
    return new Error("[ERROR]: digitNumber must be a natural number");
  }
  if (digitNumber <= 0 || digitNumber >= 10) {
    return new Error(
      "[ERROR]: digitNumber cannot be less than 0 or greater than 10"
    );
  }

  let validNumber = "";
  let digitCount = 0;
  while (digitCount < digitNumber) {
    const pickedNumber = Random.pickNumberInRange(1, 9);
    if (validNumber.indexOf(pickedNumber) === -1) {
      digitCount += 1;
      validNumber = validNumber + pickedNumber;
    }
  }
  return validNumber;
}
