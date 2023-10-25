import { MissionUtils } from '@woowacourse/mission-utils';

// 임의의 세자리 수를 설정해 반환
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
