import { Random, Console } from "@woowacourse/mission-utils";

export class GameController {
  constructor() {
    this.computer = [];
  }

  init() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        this.computer.push(number);
      }
    }
    return this.computer;
  }
}
