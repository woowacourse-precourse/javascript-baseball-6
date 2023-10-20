import { Random, Console } from "@woowacourse/mission-utils";

class App {
  #strike;
  #ball;
  #nothing;

  constructor() {
    this.computer = "";
    this.player = "";
    this.#strike = 0;
    this.#ball = 0;
    this.#nothing = false;
  }

  async play() {
    this.pickComputerNumber();
    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      await this.enterPlayerNumber();
      this.compareNumber();
      this.printScore();
      if (this.isThreeStrike()) break;
    }

    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.initScore();
    await this.reStart();
  }

  /* 컴퓨터가 서로 다른 숫자 3개를 뽑는다. */
  pickComputerNumber() {
    let arr = [];

    while (arr.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!arr.includes(num)) {
        arr.push(num);
      }
    }

    this.computer = arr.join("");
  }

  /* 플레이어의 숫자를 입력받는다. */
  async enterPlayerNumber() {
    const answer = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const regex = new RegExp(/[0-9]/);

    this.logErrorIf(answer.length !== 3 || !regex.test(answer));
    this.player = answer;
  }

  /* 컴퓨터와 플레이어의 숫자 비교한다. */
  compareNumber() {
    let strike = 0;
    let ball = 0;
    let nothing = false;

    for (let i = 0; i < this.player.length; i++) {
      // '스트라이크'인 경우
      if (this.player[i] === this.computer[i]) {
        strike++;
        continue;
      }

      // '볼'인 경우
      if (this.computer.includes(this.player[i])) {
        ball++;
      }
    }
    // 스트라이크, 볼 모두 0이면 낫싱
    if (strike === 0 && ball === 0) {
      nothing = true;
    }
    this.strike = strike;
    this.ball = ball;
    this.nothing = nothing;
  }

  /* 점수를 출력한다. */
  printScore() {
    let score = "";

    if (this.nothing) {
      score = "낫싱";
    } else {
      if (this.ball > 0) {
        score += `${this.ball}볼 `;
      }
      if (this.strike > 0) {
        score += `${this.strike}스트라이크`;
      }
    }
    Console.print(score);
  }

  /* 3 스트라이크 여부(숫자를 모두 맞췄는지)를 반환한다.  */
  isThreeStrike() {
    if (this.strike !== 3) {
      return false;
    }
    return true;
  }

  /* 점수를 초기화한다. */
  initScore() {
    this.strike = 0;
    this.ball = 0;
    this.nothing = false;
  }

  /* 게임 재시작 여부를 입력받는다. */
  async reStart() {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    this.logErrorIf(answer !== "1" && answer !== "2");

    if (answer === "1") {
      this.play();
    }
  }

  /* 조건에 따라 error를 던진다. */
  logErrorIf(condition) {
    if (condition) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
