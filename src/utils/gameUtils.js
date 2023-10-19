import { pickNumberInRange } from "./missionUtils.js";

export const gameUtils = {
  generateAnswer(min, max, length) {
    const answer = new Set();

    while (answer.size < length) {
      const randomNumber = pickNumberInRange(min, max);
      answer.add(randomNumber);
    }

    return [...answer];
  },
};
