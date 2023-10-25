import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  


}

// 2. 게임을 위한 랜덤 숫자야구 생성해주는 함수
function NewRandomAnswer() {
  const CORRECT_ANSWER = [];

  while (CORRECT_ANSWER.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!CORRECT_ANSWER.includes(number)) {
      CORRECT_ANSWER.push(number);
    }
  }
  return CORRECT_ANSWER;
}

export default App;
