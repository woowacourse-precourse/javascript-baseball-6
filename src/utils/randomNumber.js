import { MissionUtils } from '@woowacourse/mission-utils';
import { RULE } from '../constants/index.js';
/**
 *
 * @returns {number[]}
 */
const getRandomNumbers = () => {
  let array = [];
  while (array.length < RULE.lengthOfNumbers) {
    const { start, end } = RULE.rangeOfNumber;
    const number = MissionUtils.Random.pickNumberInRange(start, end);
    if (!array.includes(number) && number) {
      array.push(number);
    }
  }
  return array;
};
export { getRandomNumbers };
