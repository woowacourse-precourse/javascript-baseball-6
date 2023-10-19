import { MissionUtils } from "@woowacourse/mission-utils";

export const gameUtils = {
  generateAnswer(min, max, length) {
    const answer = new Set();

    while (answer.size < length) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(min, max);
      answer.add(randomNumber);
    }

    return [...answer];
  },
};
