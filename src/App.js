import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const answer = await this.generateAnswer();

    while (true) {
      const guess = await this.askForGuess();
      const result = this.checkGuess(answer, guess);

      MissionUtils.Console.print(result);

      if (result === "3스트라이크") {
        const playAgain = MissionUtils.Console.readLineAsync(
          "축하합니다! 정답을 맞췄습니다.\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );

        if (playAgain === "2") {
          MissionUtils.Console.print("게임 종료");
          break;
        } else if (playAgain === "1") {
          shouldRestart = true;
        }
      }
    }
  }

  async generateAnswer() {
    const randoms = [];

    for (let i = 0; i < 3; i++) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      randoms.push(number);
    }

    return randoms.join("");
  }

  async askForGuess() {
    const guess = await MissionUtils.Console.readLineAsync(
      "숫자를 입력하세요: "
    );
    if (!this.isValidGuess(guess)) {
      throw new Error("[ERROR]");
    }
    return guess;
  }

  isValidGuess(guess) {
    return /^\d{3}$/.test(guess) && new Set(guess).size === 3;
  }

  checkGuess(answer, guess) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (answer[i] === guess[i]) {
        strike++;
      } else if (answer.includes(guess[i])) {
        ball++;
      }
    }

    if (strike === 3) {
      return "3스트라이크";
    }

    if (strike === 0 && ball === 0) {
      return "낫싱";
    }

    return `${ball > 0 ? `${ball}볼 ` : ""}${
      strike > 0 ? `${strike}스트라이크` : ""
    }`;
  }
}

export default App;
