import Opponent from "../models/Opponent.js";
import GAME_START from "../views/GameStart.js";
import RANDOM_NUMBER from "../utils/RandomNumber.js";

/**
 * @class Controller
 * 1. 상대방(컴퓨터) 숫자를 생성한다
 */
class Controller {
  /** @type {Opponent} */
  #opponent;

  /**
   * 게임을 실행하는 함수
   */
  run() {
    GAME_START();
    this.generateOpponent();
  }

  /**
   * 상대방(컴퓨터) 숫자를 생성하는 함수
   * @returns {Opponent}
   */
  generateOpponent() {
    this.#opponent = new Opponent(RANDOM_NUMBER());
    return this.#opponent;
  }
}

export default Controller;
