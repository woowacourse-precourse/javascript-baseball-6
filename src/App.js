import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {

    let gameOver = false
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
      if (strike == 3) {
        MissionUtils.Console.print("3스트라이크");
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const newGame = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

        if (newGame == 1) {
          const answer = []
          while (answer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            answer.push(number)
          }
          correctAnswer = answer.join('')
        }
        else if (newGame == 2) {
          gameOver = true
        }
      }
    }
  }
}

export default App;