import { Console } from "@woowacourse/mission-utils";

class Score {
  #strike;
  #ball;
  #nothing;

  constructor() {
    this.#strike = 0;
    this.#ball = 0;
    this.#nothing = false;
  }

  /* 컴퓨터와 플레이어의 숫자를 비교하여 점수를 매긴다. */
  compareNumber(computerNumber, playerNumber) {
    let strike = 0;
    let ball = 0;
    let nothing = false;

    for (let i = 0; i < playerNumber.length; i++) {
      // '스트라이크'인 경우
      if (playerNumber[i] === computerNumber[i]) {
        strike++;
        continue;
      }

      // '볼'인 경우
      if (computerNumber.includes(playerNumber[i])) {
        ball++;
      }
    }
    // 스트라이크, 볼 모두 0이면 낫싱
    if (strike === 0 && ball === 0) {
      nothing = true;
    }

    this.#strike = strike;
    this.#ball = ball;
    this.#nothing = nothing;
  }

  /* 점수를 출력한다. */
  print() {
    let score = "";

    if (this.#nothing) {
      score = "낫싱";
    } else {
      if (this.#ball > 0) {
        score += `${this.#ball}볼 `;
      }
      if (this.#strike > 0) {
        score += `${this.#strike}스트라이크`;
      }
    }
    Console.print(score);
  }

  /* 3 스트라이크 여부(숫자를 모두 맞췄는지)를 반환한다.  */
  isThreeStrike() {
    if (this.#strike === 3) return true;
    return false;
  }

  /* 점수를 초기화한다. */
  init() {
    this.#strike = 0;
    this.#ball = 0;
    this.#nothing = false;
  }
}

export default Score;
