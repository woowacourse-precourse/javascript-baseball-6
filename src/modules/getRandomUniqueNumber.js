import { Random } from '@woowacourse/mission-utils';

const NUMBER_LENGTH = 3;
const START = 1;
const STOP = 9;

const getRandomUniqueNumber = () => {
  const randomNumber = [];

  while (randomNumber.length < NUMBER_LENGTH) {
    const number = Random.pickNumberInRange(START, STOP);

    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  }

  const numberString = randomNumber.join('');

  return numberString;
};

export default getRandomUniqueNumber;
