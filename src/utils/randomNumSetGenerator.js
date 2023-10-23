import { Random } from '@woowacourse/mission-utils';
import { SETTINGS } from '../../constants/index.js';

/**
 * 1에서 9까지 서로 다른 임의의 수 3개를 하나의 배열로 담아 return하는 유틸 함수
 * @returns {number[]}
 */
const randomNumSetGenerator = () => {
  const randomNumberSet = [];

  while (randomNumberSet.length < SETTINGS.NUMBER_OF_RANDOM) {
    const number = Random.pickNumberInRange(
      SETTINGS.MIN_RANGE,
      SETTINGS.MAX_RANGE
    );
    if (!randomNumberSet.includes(number)) randomNumberSet.push(number);
  }

  return randomNumberSet;
};

export default randomNumSetGenerator;
