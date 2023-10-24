import { Console } from "@woowacourse/mission-utils";
import Computer from "./modules/Computer";
import User from "./utils/User";
import Compare from "./utils/Compare";

export default class App {
  constructor() {
    this.isReplaying = true;
    this.computer = new Computer();
    this.user = new User();
    this.compare = new Compare(this.user, this.computer);
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.isReplaying) {
      const gameWon = await this.compare.compareNumbers();
      if (gameWon) {
        await this.isReplay();
      }
    }
  }

  async isReplay() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const userChoice = await Console.readLineAsync("");

    if (userChoice === "1") {
      this.isReplaying = true;
    } else if (userChoice === "2") {
      this.isReplaying = false;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}
