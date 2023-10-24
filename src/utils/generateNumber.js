import { Random } from '@woowacourse/mission-utils';

const generateNumber = ({ size, min, max }) => {
  const numbers = [];

  while (numbers.length < size) {
    const number = Random.pickNumberInRange(min, max);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  return Number(numbers.join(''));
}

export default generateNumber;