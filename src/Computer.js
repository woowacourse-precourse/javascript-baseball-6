const { Random } = require('@woowacourse/mission-utils');

class Computer {

  // 랜덤한 3자리수 생성
  randomGenerator() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  };

}

module.exports = Computer;
