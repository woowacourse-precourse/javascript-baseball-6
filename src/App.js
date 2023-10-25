import { Console, MissionUtils } from "@woowacourse/mission-utils";

const START = "숫자 야구 게임을 시작합니다.";
const ERROR = "[ERROR]";

class App {
  constructor() {
    this.randomNumber = this.generateNumber();
  }

  async play() {
    Console.print(START);

    while (true) {
      const input = await Console.readLineAsync("3자리 숫자를 입력하세요: ");
      this.validateNumber(input);
      const result = this.compareNumber(input);
      Console.print(result);
    }
  }

  generateNumber() {
    // 랜덤 숫자 생성
    const randomNumber = [];

    while (randomNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }
    Console.print(randomNumber);
    return randomNumber;
  }

  validateNumber(input) {
    //input을 받으면 string 데이터 타입이 된다
    if (input.length !== 3) {
      throw new Error(`${ERROR} 입력된 숫자는 3자리 숫자여야 합니다.`);
    }
    if (!input.match(/[1-9]/g)) {
      throw new Error(`${ERROR} 입력된 숫자가 1~9 사이의 숫자가 아닙니다.`);
    }
    if (input.length !== new Set(input).size) {
      throw new Error(`${ERROR} 중복된 수가 입력되었습니다. `);
    }
  }

  printRestart() {}

  compareNumber(input) {
    // 숫자 비교
    const random = this.randomNumber.join(""); // 배열에 입력된 숫자들 세자리 숫자로 변경

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (random[i] === input[i]) {
        strike += 1;
      } else if (random.includes(input[i])) {
        ball += 1;
      }
    }
    if (strike === 0 && ball === 0) {
      return "낫싱";
    } else if (strike === 0) {
      return `${ball}볼`;
    } else if (ball === 0) {
      return `${strike}스트라이크`;
    } else {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }
}
export default App;

const app = new App();
app.play();
