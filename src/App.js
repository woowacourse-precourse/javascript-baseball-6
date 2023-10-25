import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {

  async play() { 
    // 변수 선언
    let CORRECT_ANSWER;

    // 초기 설정
    Console.print("숫자 야구 게임을 시작합니다.");
    CORRECT_ANSWER = NewRandomAnswer();
  }

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
