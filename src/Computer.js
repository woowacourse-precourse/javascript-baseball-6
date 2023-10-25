import { Random } from "@woowacourse/mission-utils";

class Computer {
  constructor() {this.answer = this.randomNumber();
  }
  
  randomNumber() {
    const answer = [];

    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    return number.join('');

  }
}