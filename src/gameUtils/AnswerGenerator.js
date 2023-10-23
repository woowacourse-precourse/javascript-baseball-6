import { MissionUtils } from "@woowacourse/mission-utils";

class AnswerGenerator {
  static getAnswer() {
    //중복된 숫자를 넣지 않기 위해 set을 사욯한다.
    const setAnswer = new Set();
    while (setAnswer.size != 3) {
      setAnswer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...setAnswer].join("");
  }
}

export default AnswerGenerator;
