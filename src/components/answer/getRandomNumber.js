import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_RULES } from '@/constants';

// 게임이 시작될 때 마다, 3자리까지 각 자리마다 무작위 수를 선정합니다.
const getRandomNumber = () => {
  const NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
    INPUT_RULES.MIN_RANGE,
    INPUT_RULES.MAX_RANGE,
    INPUT_RULES.NUMBER_OF_DIGITS,
  );
  return Random.shuffle(NUMBERS);
};

export default getRandomNumber;
