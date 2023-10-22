import { MissionUtils } from "@woowacourse/mission-utils";

export const pickNumberInRange = (startInclusive, endInclusive) => {
  return MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);
};
