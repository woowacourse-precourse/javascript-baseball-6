import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answerNumber = [];
    this.gameStart = true;
  }

  async play() {
    while (this.gameStart) {
      this.generateRandomNumber();
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      let result;
      while (result !== "3스트라이크") {
        const USER_INPUT = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해 주세요. : "
        );
        if (
          USER_INPUT.length !== 3 ||
          new Set(USER_INPUT).size !== 3 ||
          [...USER_INPUT].some((int) => Number(int) < 1 || Number(int) > 9)
        ) {
          throw new Error("[ERROR] 올바른 값이 아닙니다.");
        }
        result = this.checkGuessResult(USER_INPUT);
        MissionUtils.Console.print(result);
      }

      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      const REPLAY = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      if (REPLAY === "2") {
        this.gameStart = false;
      }
    }
  }

  generateRandomNumber() {
    this.answerNumber = [];
    while (this.answerNumber.length < 3) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answerNumber.includes(RANDOM_NUMBER)) {
        this.answerNumber.push(RANDOM_NUMBER);
      }
    }
  }

  checkGuessResult(guess) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (guess[i] == this.answerNumber[i]) {
        strike++;
      } else if (this.answerNumber.includes(Number(guess[i]))) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      return "낫싱";
    }
    // trim으로 결과가 없을때 나오는 공백을 제거
    return `${ball ? ball + "볼" : ""} ${
      strike ? strike + "스트라이크" : ""
    }`.trim();
  }
}

export default App;
