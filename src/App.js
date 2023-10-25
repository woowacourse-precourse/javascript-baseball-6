import { Random, Console } from "@woowacourse/mission-utils";
import { isValid } from "./Util";

class App {
  constructor() {

    this.userNumbers = [];
    this.comNumbers = [];
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    this.makeComNumbers();

    while (true) {
      await this.makeUserNumbers();

      const retString = this.checkNumbers();
      Console.print(retString);

      if (retString === "3스트라이크") {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const ifContinue = await this.checkContinue();

        if (!ifContinue) break;

        this.reset();
      }
    }
  }

  makeComNumbers() {
    this.comNumbers = [];
    while (this.comNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.comNumbers.includes(number)) {
        this.comNumbers.push(number);
      }
    }
  }

  async makeUserNumbers() {
    this.userNumbers = (await Console.readLineAsync("숫자를 입력해주세요 : ")).split("").map(Number);
    if (!isValid(this.userNumbers) || this.userNumbers.length !== 3) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  checkNumbers() {
    let strike = 0, ball = 0;

    for (let i=0; i<3; i++) {
      if (this.comNumbers[i] === this.userNumbers[i]) {
        strike++;
      } else if (this.comNumbers.includes(this.userNumbers[i])) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) return "낫싱";
    return `${ball ? ball + "볼" : ""} ${strike ? strike + "스트라이크" : ""}`.trim();
  }

  async checkContinue() {
    const inputNum = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if (inputNum !== "1" && inputNum !== "2") {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return inputNum === "1";
  }

  reset() {
    this.userNumbers = [];
    this.comNumbers = [];
    this.makeComNumbers();
  }
}
export default App;