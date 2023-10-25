import GuessNumber from "./GuessNumber.js";

class BaseballGame {
  constructor() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.startTurn();
  }

  startTurn() {
    new GuessNumber();
  }
}

export default BaseballGame;
