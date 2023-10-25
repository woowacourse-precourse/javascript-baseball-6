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
      if (result === "3스트라이크") {
        const shouldExit = await this.printRestart();
        if (shouldExit) {
          break;
        }
        this.randomNumber = this.generateNumber(); // 새로운 숫자 생성
      }
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
    return randomNumber;
  }

  validateNumber(input) {
    //input을 받으면 string 데이터 타입이 된다
    if (input.length !== 3) {
      throw new Error(`${ERROR} 입력된 숫자는 3자리 숫자여야 합니다.`);
    }
    if (input.includes("0")) {
      throw new Error(`${ERROR} 입력된 숫자에 0이 포함되어 있습니다.`);
    }
    if (input.split("").some((num) => isNaN(num))) {
      throw new Error(`${ERROR} 입력된 숫자에 문자가 포함되어 있습니다.`);
    }
    if (input.length !== new Set(input).size) {
      throw new Error(`${ERROR} 중복된 수가 입력되었습니다.`);
    }
  }

  async printRestart() {
    const RESTART = "1";
    const EXIT = "2";
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const exitInput = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if (exitInput === RESTART) {
      return false;
    } else if (exitInput === EXIT) {
      return true;
    } else {
      throw new Error(`${ERROR} 1,2 외의 다른 숫자입니다`);
    }
  }

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
