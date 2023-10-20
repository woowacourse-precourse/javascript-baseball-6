import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Game {
  constructor() {
    this.Computer = [0, 0, 0];
  }

  randomNum() {
    this.Computer.forEach(
      (_, idx, arr) => (arr[idx] = MissionUtils.Random.pickNumberInRange(1, 9))
    );

    return this.Computer;
  }

  isNumber_Same() {}
}

export default Game;
