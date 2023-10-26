import { Random } from '@woowacourse/mission-utils';

const PickRandomNumbers = () => {
  const computerNumbers = [];
  while (computerNumbers.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computerNumbers.includes(number)) {
      computerNumbers.push(number);
    }
  }
  return computerNumbers;
};

export default PickRandomNumbers;
