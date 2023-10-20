import { MissionUtils } from "@woowacourse/mission-utils";

const generateNum = function generateRandomNumberList({ length }) {
  const computer = [];
  while (computer.length < length) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
};

export default generateNum;
