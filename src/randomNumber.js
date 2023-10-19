import { Random } from "@woowacourse/mission-utils";

export default function generateRandomNumber() {
  const computerNums = new Set();

  while (computerNums.size < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    computerNums.add(randomNumber);
  }

  return [...computerNums];
}
