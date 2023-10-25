import { Console } from "@woowacourse/mission-utils";
import { createNumber } from "./createNumber.js";

class Game {
  constructor() {
    this.computer = createNumber();
  }

  countBall(numbers) {
    let ball = 0;
    numbers.map((num, idx) => {
      if (num === this.computer[idx]) {
        ball++;
      }
    });
    return ball;
  }

  countStrike(numbers) {
    let strike = 0;
    numbers.map((num, idx) => {
      if (this.computer.includes(num) && this.computer.indexOf(num) != idx) {
        strike++;
      }
    });
    return strike;
  }

  checkNumbers(numbers) {
    let ball = this.countBall(numbers);
    let strike = this.countStrike(numbers);
    console.log("computer: ", this.computer);

    if (strike === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    } else if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else if (strike > 0 && ball > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (strike === 0 && ball > 0) {
      Console.print(`${ball}볼`);
    } else if (strike > 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    }
    return false;
  }
}
export default Game;
