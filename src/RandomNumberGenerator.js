import { MissionUtils } from '@woowacourse/mission-utils';
import { MAX_NUMBER, MIN_NUMBER, NUM_DIGITS } from './constants/NumberConstants';

export default class RandomNumberGenerator {
  #generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
  }
  generateRandomNumbers() {
    const numbersSet = new Set();
    while (numbersSet.size < NUM_DIGITS) {
      const number = this.#generateRandomNumber();
      numbersSet.add(number);
    }
    return [...numbersSet];
  }
}
