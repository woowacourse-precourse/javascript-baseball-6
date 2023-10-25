import { Console } from "@woowacourse/mission-utils";
import { createNumber } from "./createNumber.js";

class Game {
  constructor() {
    this.computer = createNumber();
    this.ball = 0;
    this.strike = 0;
  }
  resetCount() {
    this.ball = 0;
    this.strike = 0;
  }

  countBallandStrike(user) {
    this.computer.map((num, idx) => {
      if (num === user[idx]) {
        this.strike++;
      } else if (this.computer.includes(user[idx])) {
        this.ball++;
      }
    });
  }

  checkNumbers(numbers) {
    console.log("computer: ", this.computer);
    this.resetCount();
    this.countBallandStrike(numbers);

    if (this.strike === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    } else if (this.strike === 0 && this.ball === 0) {
      Console.print("낫싱");
    } else if (this.strike > 0 && this.ball > 0) {
      Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    } else if (this.strike === 0 && this.ball > 0) {
      Console.print(`${this.ball}볼`);
    } else if (this.strike > 0 && this.ball === 0) {
      Console.print(`${this.strike}스트라이크`);
    }
    return false;
  }
}
export default Game;
