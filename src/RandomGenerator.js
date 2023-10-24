import { Random } from '@woowacourse/mission-utils';

class RandomGenerator {
  randomNumberr() {
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const COMPUTER_NUMBER = Random.pickNumberInRange(1, 9);

      if (!COMPUTER.includes(COMPUTER_NUMBER)) {
        COMPUTER.push(COMPUTER_NUMBER);
      };
    };

    return COMPUTER;
  };
};

export default RandomGenerator;
