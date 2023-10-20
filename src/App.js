import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computer = "";
    this.user = "";
  }

  async play() {
    this.computer = this.pickRandomNum();
    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      this.user = await this.getUserNumber();

      // 결과 출력하기
      const success = this.grade(this.user);
      // 숫자를 모두 맞혔으면 통과
      if (success) break;
    }

    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const again = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (again === "1") {
      // 게임 다시 시작
      this.play();
    }
  }

  pickRandomNum() {
    let arr = [];

    while (arr.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!arr.includes(num)) {
        arr.push(num);
      }
    }

    return arr.join("");
  }

  // 사용자 입력 받기
  async getUserNumber() {
    const user = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const regex = new RegExp(/[0-9]/);

    if (user.length !== 3 || !regex.test(user)) {
      throw new Error("숫자 3개를 입력해주세요.");
    }
    return user;
  }

  grade(answer) {
    let strike = 0;
    let ball = 0;
    let nothing = false;

    for (let i = 0; i < answer.length; i++) {
      // '스트라이크'인 경우
      if (answer[i] === this.computer[i]) {
        strike++;
        continue;
      }

      // '볼'인 경우
      if (this.computer.includes(answer[i])) {
        ball++;
      }
    }
    // 스트라이크, 볼 모두 0이면 낫싱
    if (strike === 0 && ball === 0) {
      nothing = true;
    }

    // 결과 출력하기
    let score = "";

    if (nothing) {
      score = "낫싱";
    } else {
      if (ball > 0) {
        score += `${ball}볼 `;
      }
      if (strike > 0) {
        score += `${strike}스트라이크`;
      }
    }
    Console.print(score);

    // 모두 맞히면 true, 아니면 false
    if (strike !== 3) {
      return false;
    }
    return true;
  }
}

const app = new App();
await app.play();

export default App;
