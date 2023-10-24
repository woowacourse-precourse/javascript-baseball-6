import { Random } from '@woowacourse/mission-utils';
import Constant from './Constant';

const { MAX_NUM_LENGTH } = Constant;
const START = 1;
const STOP = 9;

const getRandomUniqueNumber = () => {
  const randomNumbers = [];

  while (randomNumbers.length < MAX_NUM_LENGTH) {
    const number = Random.pickNumberInRange(START, STOP);

    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    }
  }

  const numberString = randomNumbers.join('');

  return numberString;
};

export default getRandomUniqueNumber;
