import { Random } from "@woowacourse/mission-utils";
class Computer {
  createRandomNumber() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
}

export { Computer };
