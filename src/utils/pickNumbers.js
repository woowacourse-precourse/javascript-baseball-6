import { Random } from '@woowacourse/mission-utils';

const pickNumbers = () => {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    const num = Random.pickNumberInRange(1, 9);
    if (!randomNumbers.includes(num)) {
      randomNumbers.push(num);
    }
  }
  return randomNumbers;
};

export default pickNumbers;
