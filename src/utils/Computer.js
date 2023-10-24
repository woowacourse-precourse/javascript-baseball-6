import { Random } from '@woowacourse/mission-utils';
import { SIZE } from '../constant';

export default class Computer {
  getRandomNumber() {
    let three_numbers = '';

    while (three_numbers.length < SIZE) {
      const RANDOM_NUMBER = Random.pickNumberInRange(1, 9);
      if (!three_numbers.includes(String(RANDOM_NUMBER))) {
        three_numbers += String(RANDOM_NUMBER);
      }
    }

    return Number(three_numbers);
  }
}