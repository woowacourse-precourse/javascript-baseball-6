import { MissionUtils, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let isGameEnded = false;

    while (!isGameEnded) {
      const answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
      console.log(answer);
      while (true) {
        const userResponse = await Console.readLineAsync(
          "숫자를 입력해주세요: "
        );
        // TODO 입력값 예외처리 필요

        const { strike, ball } = this.compareNumbers(answer, userResponse);

        this.displayGameStatus(strike, ball);

        if (strike === 3) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }
      }

      Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      // TODO 재시작, 종료에 대한 처리 필요
    }
  }

  compareNumbers(answer, userResponse) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (userResponse.charAt(i) - "0" === answer[i]) {
        strike++;
      } else if (answer.includes(userResponse.charAt(i) - "0")) {
        ball++;
      }
    }
    return { strike, ball };
  }

  displayGameStatus(strike, ball) {
    let message = "";

    if (ball !== 0) {
      message += `${ball}볼 `;
    }

    if (strike !== 0) {
      message += `${strike}스트라이크`;
    }

    if (!message) {
      message = "낫싱";
    }

    Console.print(message.trim());
  }
}

export default App;
