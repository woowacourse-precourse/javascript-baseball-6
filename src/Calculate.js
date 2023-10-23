import { GAME_NUM_LENGTH, NUM_TO_WIN, RESTART_NUM } from "./constant/rule";

export default class Calculate {
  constructor() {
    this.strike = 0;
    this.ball = 0;
  }

  compareAnsAndPlayer(answer, player) {
    let index = 0;

    while (index < GAME_NUM_LENGTH) {
      if (!answer.includes(player[index])) {
        index += 1;
        continue;
      }

      if (answer[index] === player[index]) {
        this.strike += 1;
        index += 1;
        continue;
      }

      this.ball += 1;
      index += 1;
    }

    return this;
  }

  getResult() {
    return [this.ball, this.strike];
  }

  static isPlayerWin(strikeCount) {
    if (strikeCount === NUM_TO_WIN) {
      return true;
    }

    return false;
  }

  static isReStart(option) {
    if (option === RESTART_NUM) {
      return true;
    }

    return false;
  }
}
