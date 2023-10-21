import { MissionUtils } from "@woowacourse/mission-utils";

const createNumber = () => {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(NUMBER)) {
      COMPUTER.push(NUMBER);
    }
  }
  return COMPUTER.join("");
};

export { createNumber };
