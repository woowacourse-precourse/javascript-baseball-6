import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 겹치지 않는 랜덤한 3개의 공 숫자 생성
 * @returns {number}
 */

export const generateRandomBallNumber = () => {
    const number = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
    return number;
}