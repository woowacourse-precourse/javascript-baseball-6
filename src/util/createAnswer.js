import { MissionUtils } from "@woowacourse/mission-utils";

function createAnswer() {
  function createRandomNumber(answer, index) {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (index === 0) {
      return RANDOM_NUMBER;
    } else {
      if (answer.includes(RANDOM_NUMBER)) {
        return createRandomNumber(answer, index);
      } else {
        return RANDOM_NUMBER;
      }
    }
  }

  const newAnswer = [];
  for (let i = 0; i < 3; i++) {
    const SINGLE_ANSWER = createRandomNumber(newAnswer, i);
    newAnswer.push(SINGLE_ANSWER);
  }
  return [...newAnswer];
}

export default createAnswer;
