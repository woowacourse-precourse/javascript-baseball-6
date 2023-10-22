import { Random } from "@woowacourse/mission-utils";

export default function getRandomNumBer(digitNumber) {
  if (!Number.isInteger(digitNumber)) {
    return new Error("digitNumber must be a natural number");
  }
  if (digitNumber <= 0 || digitNumber >= 10) {
    return new Error("digitNumber cannot be less than 0 or greater than 10");
  }
  return Random.pickUniqueNumbersInRange(1, 9, digitNumber).join("");
}
