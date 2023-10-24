import { MissionUtils } from "@woowacourse/mission-utils";

export function generateComputerAnswer(answerLength) {
  const computerAnswer = new Set();

  while (computerAnswer.size < answerLength) {
    computerAnswer.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }

  return [...computerAnswer];
}