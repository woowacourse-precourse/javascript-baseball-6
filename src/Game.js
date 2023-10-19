import { MissionUtils } from "@woowacourse/mission-utils";

export class Game {
  constructor() {
    this.welcome();
    this.randomGenerator();
  }

  welcome() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  randomGenerator() {
    const set = new Set();
    while (set.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      set.add(number);
    }
    return [...set];
  }
}
