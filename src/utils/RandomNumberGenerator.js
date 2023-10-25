import { Random } from "@woowacourse/mission-utils";

const randomNumberGenerator = {
  generate(size) {
    const randomNumber = [];
    while (randomNumber.length < size) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    return randomNumber;
  },
};
export default randomNumberGenerator;
