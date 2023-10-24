import { MissionUtils } from '@woowacourse/mission-utils';

function setRandomAnswer() {
  const answer = [];

  while (answer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!answer.includes(String(number))) {
      answer.push(String(number));
    }
  }

  return answer;
}

export default setRandomAnswer;
