import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let restart = true;

    while (restart) {
      const answer = this.randomNumber();
      let correctlyGuessed = false;

      while (!correctlyGuessed) {
        const userGuess = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        const result = this.check(userGuess, answer);

        MissionUtils.Console.print(`결과: ${result}`);

        if (result === "3스트라이크") {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          correctlyGuessed = true;
        }
      }
      restart = await this.restartOrExit();
    }
  }

  randomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  check(guess, answer) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (guess[i] === answer[i]) {
        strike++;
      } else if (answer.includes(guess[i])) {
        ball++;
      }
    }

    if (strike === 3) {
      return "3스트라이크";
    } else if (strike === 0 && ball === 0) {
      return "낫싱";
    } else if (strike === 0 && ball !== 0) {
      return `${ball}볼`;
    } else if (strike !== 0 && ball === 0) {
      return `${strike}스트라이크`;
    } else {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }

  async restartOrExit() {
    const choice = await MissionUtils.Console.readLineAsync(
      "게임을 재시작하려면 1, 종료하려면 2를 입력하세요: "
    );
    return choice === "1";
  }
}
export default App;

const app = new App();
app.play();
