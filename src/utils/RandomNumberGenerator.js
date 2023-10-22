import { Random } from "@woowacourse/mission-utils";

const RandomNumberGenerator = {
  generateRandomNumber(size) {
    const randomNumbers = [];
    while (randomNumbers.length < size) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(number)) randomNumbers.push(number);
    }
    return randomNumbers;
  },
};
export default RandomNumberGenerator;
