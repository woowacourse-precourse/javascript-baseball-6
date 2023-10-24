import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {

    let correctAnswer;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    correctAnswer = answer.join('');
  }
}

export default App;