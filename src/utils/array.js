import { MissionUtils } from "@woowacourse/mission-utils";

export const getThreeDistinctNumbers = () => {
  const result = [];

  while (result.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!result.includes(number)) result.push(number);
  }

  return result;
};

export const stringToNumberArray = (str) => str.split("").map((c) => Number(c));
