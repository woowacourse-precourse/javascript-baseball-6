import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computer = this.generateRandomNumber();
    while (true) {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (!this.checkInputCorrect(input)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      const result = this.compare(input);
      Console.print(result);
      if (result === "3스트라이크") {
        const exit = await this.printRestart();
        if (!exit) {
          break;
        } else {
          this.computer = this.generateRandomNumber();
        }
      }
    }
  }

  // 종료
  async printRestart() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const exitNumber = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (exitNumber === "1") {
      return true;
    } else if (exitNumber === "2") {
      return false;
    } else {
      throw new Error("[ERROR] 다른 숫자를 입력하셨습니다.");
    }
  }
  // 랜덤숫자생성
  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  // 유효성체크. 3자리숫자인지
  checkInputCorrect(input) {
    const INPUT_REGEX = /^[1-9]\d{2}$/;
    if (!INPUT_REGEX.test(input)) {
      return false;
    }
    // 중복제거
    const set = new Set();
    for (let i of input) {
      if (set.has(i)) {
        return false;
      }
      set.add(i);
    }
    return true;
  }
  //스트라이크판별.
  compare(input) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (this.computer[i] === parseInt(input[i])) {
        strike += 1;
      } else if (this.computer.includes(parseInt(input[i]))) {
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

const app = new App();
app.play();

export default App;
