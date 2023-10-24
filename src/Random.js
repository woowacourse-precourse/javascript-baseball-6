const { Random } = require("@woowacourse/mission-utils");

class Random {
  generateComRandom() {
    const comRandozm = [];
    while (comRandom.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!comRandom.includes(number)) {
        comRandom.push(number);
      }
    }

    return comRandom;
  }
}

module.exports = { Random };
