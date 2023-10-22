import { MissionUtils } from "@woowacourse/mission-utils";

function createRandomNumber() {
  const NUMBERS = [];
  while (NUMBERS.length < 3) {
    const RANDOMNUM = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!NUMBERS.includes(RANDOMNUM)) {
      NUMBERS.push(RANDOMNUM);
    }
  }
  return NUMBERS.join("");
}

export { createRandomNumber };
