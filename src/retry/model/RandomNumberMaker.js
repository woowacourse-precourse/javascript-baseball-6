import { Random } from '@woowacourse/mission-utils';
const VALUE = require('../constant/value');

const RandomNumberMaker = {
  generate() {
    const numbers = [];
    while (numbers.length < VALUE.LENGTH) {
      const number = Random.pickNumberInRange(VALUE.RANGE_MINIMUM, VALUE.RANGE_MAXIMUM);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  },
};

module.exports = RandomNumberMaker;