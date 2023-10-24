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

    let input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

    if (input[0] == 0 || input[1] == 0 || input[2] == 0) {
      MissionUtils.Console.print("잘못된 입력입니다. 0을 제외한 숫자를 입력해주세요 : ");
    } else if (input[0] == input[1] || input[0] == input[2] || input[1] == input[2]) {
      MissionUtils.Console.print("잘못된 입력입니다. 서로 다른 숫자를 입력해주세요 : ");
    } else {
      let strike = 0;
      let ball = 0;

      for (let i = 0; i < input.length; i++) {
        if (correctAnswer[i] == input[i]) {
          strike++
        } else if (correctAnswer.includes(input[i])) {
          ball++
        }
      }
    }
  }
}

export default App;