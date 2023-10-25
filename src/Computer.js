import { MissionUtils } from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this.answer = this.createAnswer();
  }

  getAnswer() {
    return this.answer;
  }

  createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
}

export default Computer;
