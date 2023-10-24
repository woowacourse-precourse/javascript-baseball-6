import { MissionUtils } from '@woowacourse/mission-utils';

export function generateRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}
