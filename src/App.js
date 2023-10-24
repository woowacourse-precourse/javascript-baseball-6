import { Random, Console } from "@woowacourse/mission-utils";
const START_MENT = "숫자 야구 게임을 시작합니다.";
const END_MENT = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const REPLAY_MENT = "게임을 새로 시작하려면 1, 종료하시려면 2를 입력하세요.";

class App {
  async play() {}
  constructor() {
    this.computerNumber = undefined;
    this.userNumber = undefined;
  }
  async play() {
    this.makeComputerNumber();
    Console.print(START_MENT);
    await this.startMatching();
    Console.print(END_MENT);
    await this.replay();
  }

  makeComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computerNumber = [...computer];
  }
  async userInput() {
    try {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (userInput.length !== 3) {
        throw new Error(
          `[ERROR] 사용자의 입력값이 ${userInput.length}개 입니다. 올바른 입력값은 3개 입니다.`
        );
      }
      this.userNumber = [...userInput].map((e) => +e);
    } catch (e) {
      throw new Error("[ERROR]" + e.message);
    }
  }

  ment(strike, ball) {
    if (strike + ball === 0) {
      return Console.print("낫싱");
    }
    if (strike === 0) {
      return Console.print(`${ball}볼`);
    }
    if (ball === 0) {
      return Console.print(`${strike}스트라이크`);
    }
    return Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  async startMatching() {
    let ball = 0;
    let strike = 0;
    while (true) {
      await this.userInput();
      this.userNumber.forEach((num, index) => {
        if (num === this.computerNumber[index]) {
          strike += 1;
        } else if (this.computerNumber.includes(num)) {
          ball += 1;
        }
      });
      this.ment(strike, ball);
      if (strike === 3) return;
      strike = 0;
      ball = 0;
    }
  }
  async replay() {
    const userReplayInput = await Console.readLineAsync(REPLAY_MENT);
    if (userReplayInput === "1") return this.play();
    else return;
  }
}

export default App;

const app = new App();
app.play();
