import {MissionUtils} from "@woowacourse/mission-utils"

const NUMBER_LENGTH = 3;

function randomNumber() {
  const computer = [];
  while(computer.length < NUMBER_LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

export default randomNumber;