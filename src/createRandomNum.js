import * as MissionUtils from "@woowacourse/mission-utils";

export const createRandomNum = () => {
  const randomNum = [];

  while (randomNum.length < 3) {
    const num = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNum.includes(num)) randomNum.push(num);
  }
  return randomNum;
};
