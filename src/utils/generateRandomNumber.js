import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBER_SIZE } from '../constants/index.js';

const generateRandomNumber = () => {
  const randomNumber = [];

  while (randomNumber.length < NUMBER_SIZE) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  }

  return randomNumber;
};

export default generateRandomNumber;
