import { MissionUtils } from '@woowacourse/mission-utils';

export const gameUtils = {
  generateAnswer(min, max, length) {
    const answer = new Set();

    while (answer.size < length) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(min, max);
      answer.add(randomNumber);
    }

    return [...answer];
  },
  calculateBallStrikeScore(answer, pitches) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < pitches.length; i += 1) {
      if (answer[i] === pitches[i]) {
        strike += 1;
        continue;
      }
      if (answer.includes(pitches[i])) {
        ball += 1;
      }
    }
    return [ball, strike];
  },
};
