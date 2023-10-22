import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answerNumber = [];
    this.gameStart = true;
  }

  async play() {}

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

    for (let i = 0; i < 3; this.answerNumber[i]) {
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
    return `${ball ? ball + "볼" : ""} ${strike ? strike + "스트라이크" : ""}`.trim();
  }
}

export default App;
