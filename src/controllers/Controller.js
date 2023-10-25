import OpponentNumber from "../models/OpponentNumber.js";
import GAME_START from "../views/GameStart.js";
import RANDOM_NUMBER from "../utils/RandomNumber.js";

/**
 * @class Controller
 * 1. 상대방(컴퓨터) 숫자를 생성한다
 */
class Controller {
  /** @type {OpponentNumber} */
  #opponentNumber;

  /**
   * 게임을 실행하는 함수
   */
  run() {
    this.startGame();
  }

  /**
   * 상대방(컴퓨터) 숫자를 생성하는 함수
   */
  startGame() {
    GAME_START();
    this.#opponentNumber = new OpponentNumber(RANDOM_NUMBER());
  }
}

export default Controller;
