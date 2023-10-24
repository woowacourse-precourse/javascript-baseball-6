import { MissionUtils } from '@woowacourse/mission-utils';
import { BASEBALL_NUMBER } from '../constants/baseballGame.js';

export const answerGenerator = () => {
  const numberSet = new Set();

  while (numberSet.size < BASEBALL_NUMBER.DIGIT) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      BASEBALL_NUMBER.MIN,
      BASEBALL_NUMBER.MAX
    );

    numberSet.add(randomNumber);
  }

  return [...numberSet];
};
