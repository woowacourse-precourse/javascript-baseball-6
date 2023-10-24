const { Random } = require('@woowacourse/mission-utils');

function makeComputerNumber() {
  let computer = '';

  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    // 중복 없이 생성
    if (!computer.includes(number)) {
      computer += number;
    }
  }

  return computer;
}

export default makeComputerNumber;
