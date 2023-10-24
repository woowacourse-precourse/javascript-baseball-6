import { Random } from '@woowacourse/mission-utils';
import Constant from './Constant';

const { MAX_NUM_LENGTH } = Constant;
const START = 1;
const STOP = 9;

const getRandomUniqueNumber = () => {
  const randomNumber = [];

  while (randomNumber.length < MAX_NUM_LENGTH) {
    const number = Random.pickNumberInRange(START, STOP);

    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  }

  const numberString = randomNumber.join('');

  return numberString;
};

export default getRandomUniqueNumber;
