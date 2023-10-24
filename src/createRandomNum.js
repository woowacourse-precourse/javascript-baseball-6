import * as MissionUtils from "@woowacourse/mission-utils";
import { BASEBALL_NUMBER } from "./constants";

export const createRandomNum = () => {
  const numberSet = new Set();

  while (numberSet.size < 3) {
    const randomNum = MissionUtils.Random.pickNumberInRange(
      BASEBALL_NUMBER.MIN,
      BASEBALL_NUMBER.MAX
    );

    numberSet.add(randomNum);
  }
  return [...numberSet];
};
