import { MissionUtils } from "@woowacourse/mission-utils";

function randomNumSet(numSize) {
  const computer = [];
  while (computer.length < numSize) {
    const genNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(genNumber)) {
      computer.push(genNumber);
    }
  }
  return computer;
}

export default randomNumSet;
