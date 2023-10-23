import { MissionUtils } from '@woowacourse/mission-utils';
import { MIN_NUM, MAX_NUM, NUM_OF_BALLS } from '../constants/index.js';

export function generateThreeNumber() {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    MIN_NUM,
    MAX_NUM,
    NUM_OF_BALLS
  );
}
