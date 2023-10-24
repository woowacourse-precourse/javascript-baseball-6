import * as MissionUtils from "@woowacourse/mission-utils";

export const createRandomNum = () => {
  const numberSet = new Set();

  while (numberSet.size < 3) {
    const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);

    numberSet.add(randomNum);
  }
  return [...numberSet];
};
