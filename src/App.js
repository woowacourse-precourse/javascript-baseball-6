import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.RANDOMNUMBER = this.GENERATENUMBER();
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const INPUT = await Console.readLineAsync("3자리 숫자를 입력하세요: ");

      const RESULT = this.COMPARENUMBER(INPUT);
      Console.print(RESULT);
    }
  }

  GENERATENUMBER() {
    // 랜덤 숫자 생성 함수
    const RANDOMNUMBER = [];

    while (RANDOMNUMBER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!RANDOMNUMBER.includes(NUMBER)) {
        RANDOMNUMBER.push(NUMBER);
      }
    }
    Console.print(RANDOMNUMBER);
    return RANDOMNUMBER;
  }

  COMPARENUMBER(INPUT) {
    const RANDOM = this.RANDOMNUMBER.join(""); // 배열에 입력된 숫자들 세자리 숫자로 변경

    let STRIKE = 0;
    let BALL = 0;

    for (let i = 0; i < 3; i++) {
      if (RANDOM[i] === INPUT[i]) {
        STRIKE += 1;
      } else if (RANDOM.includes(INPUT[i])) {
        BALL += 1;
      }
    }
    if (STRIKE === 0 && BALL === 0) {
      return "낫싱";
    } else if (STRIKE === 0) {
      return `${BALL}볼`;
    } else if (BALL === 0) {
      return `${STRIKE}스트라이크`;
    } else {
      return `${BALL}볼 ${STRIKE}스트라이크`;
    }
  }
}
export default App;

const app = new App();
app.play();
