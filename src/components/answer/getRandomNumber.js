import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_RULES } from '../../constants';

// 게임이 시작될 때 마다, 3자리까지 각 자리마다 무작위 수를 선정합니다.
const getRandomNumber = () => {
  const computedNumber = [];
  while (computedNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(
      INPUT_RULES.MIN_RANGE,
      INPUT_RULES.MAX_RANGE,
    );
    if (!computedNumber.includes(number)) computedNumber.push(number);
  }
  return computedNumber;
};

export default getRandomNumber;
