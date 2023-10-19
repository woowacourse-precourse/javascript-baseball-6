import { MissionUtils } from "@woowacourse/mission-utils";

export const getRandomNumber = () => {
  const randomNumberArr = [];
  while (randomNumberArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumberArr.includes(number)) {
      randomNumberArr.push(number);
    }
  }
  return randomNumberArr;
};
