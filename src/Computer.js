import { Random } from "@woowacourse/mission-utils";

class Computer {
  constructor() {
    this.answer = this.pickrandomNumbers();
  }
  
  pickrandomNumbers() {
    const answer = [];

    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    return answer.join('');

  }
}

export default Computer;