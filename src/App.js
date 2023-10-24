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

    while (!gameOver) {
      try {
        let input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        input = input.trim();

        if (
          input.length !== 3 ||
          input.includes("0") ||
          input[0] == input[1] ||
          input[1] == input[2] ||
          input[0] == input[2]
        ) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
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
              MissionUtils.Console.print("게임 종료");
              gameOver = true
            } else {
              throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
            }
          } else if (strike == 0 && ball == 0) {
            MissionUtils.Console.print("낫싱");
          } else {
            MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
          }
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  }
}

export default App;