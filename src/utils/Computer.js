import { Random } from "@woowacourse/mission-utils";
import { NUMBER } from "./Constant.js";

const Computer = {
  // 서로 다른 3 자리(MAX_LENGTH) 정수 반환
  async getComputer() {
    const computerArr = [];
    while (computerArr.length < NUMBER.MAX_LENGTH) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(number)) {
        computerArr.push(number);
      }
    }
    // 문자열 형태로 형변환
    const computer = computerArr.join('');
    return computer;
  }
}

export { Computer };