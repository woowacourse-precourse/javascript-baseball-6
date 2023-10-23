const { Random } = require("@woowacourse/mission-utils");
//컴퓨터 랜덤 숫자 생성
class Computer {
  generateComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }

    return computerNumber;
  }
}

module.exports = { Computer };
