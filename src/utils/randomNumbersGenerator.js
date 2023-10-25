import { MissionUtils } from '@woowacourse/mission-utils';
import { VALIDATION } from '../constants/constants';

export const randomNumbersGenerator = () => {
  const numbers = [];

  while (numbers.length < VALIDATION.maxSize) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      VALIDATION.minNumber,
      VALIDATION.maxNumber,
    );
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return [...numbers];
};
