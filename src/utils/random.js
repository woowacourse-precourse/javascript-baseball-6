import { Random } from '@woowacourse/mission-utils';

/**
 * 주어진 범위 내에서 무작위 숫자를 선택하여 반환하는 함수
 * @param {number} minNumber - 선택할 수 있는 최소 숫자
 * @param {number} maxNumber - 선택할 수 있는 최대 숫자
 * @returns {number} 선택된 무작위 숫자
 */
export const pickRandomNumberInRange = (minNumber, maxNumber) =>
  Random.pickNumberInRange(minNumber, maxNumber);
