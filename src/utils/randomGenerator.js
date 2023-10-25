import { Random } from '@woowacourse/mission-utils';

const RandomGenerator = {
  pickRandomNumber(size) {
    const computerNumber = [];
    while (computerNumber.length < size) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber))
        computerNumber.push(randomNumber);
    }
    return computerNumber;
  },
};

export default RandomGenerator;
