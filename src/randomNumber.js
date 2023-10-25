import { MissionUtils } from "@woowacourse/mission-utils";

const radomNumber = (x) => {
  while (x.length < 3) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!x.includes(NUMBER)) {
      x.push(NUMBER);
    }
  }

  return x;
};

export default radomNumber;