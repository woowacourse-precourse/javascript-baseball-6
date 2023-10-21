import { Random } from '@woowacourse/mission-utils';

const RandomNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  },
};

module.exports = RandomNumberGenerator;