import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computer = "";
  }

  async play() {
    // 컴퓨터 랜덤으로 숫자 3개 선택
    this.computer = this.pickRandomNum();

    Console.print("숫자 야구 게임을 시작합니다.");
    // 사용자 입력 받기
    const user = await Console.readLineAsync("숫자를 입력해주세요 : ");

    // 결과 출력하기
    this.grade(user);
  }

  pickRandomNum() {
    let arr = [];

    while (arr.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      arr.push(num);
    }

    return arr.join("");
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
  }
}

const app = new App();
await app.play();

export default App;
