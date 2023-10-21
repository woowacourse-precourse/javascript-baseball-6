import { Console, Random } from "@woowacourse/mission-utils";

export default class BaseballGame {
  constructor() {
    this.computer = [];
  }

  startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");

    // Computer random number 생성
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
    Console.print(this.computer);
  }
}
