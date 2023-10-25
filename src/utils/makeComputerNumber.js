const { Random } = require('@woowacourse/mission-utils');
const { ANSWER_LENGTH } = require('../constants/constants').default;

function makeComputerNumber() {
  let computer = '';

  while (computer.length < ANSWER_LENGTH) {
    const number = Random.pickNumberInRange(1, 9);
    // 중복 없이 생성
    if (!computer.includes(number)) {
      computer += number;
    }
  }

  return computer;
}

export default makeComputerNumber;
