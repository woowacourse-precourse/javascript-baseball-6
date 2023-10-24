import { Random } from "@woowacourse/mission-utils";

const RandomNumberGenerator = {
  generateRandomNumber() {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(number)) randomNumbers.push(number);
    }
    return randomNumbers;
  },
};
export default RandomNumberGenerator;
