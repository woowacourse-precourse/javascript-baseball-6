// 한판의 게임을 책임지는 클래스

import Oppenent from "./Opponent.js";

class Game {
  /**
   * @type { Oppenent } 게임 내에서 상대방(컴퓨터) 정답 번호 정의
   */

  #opponent;

  /**
   * @type {[number, number, number]}
   */

  #opponentGongs;

  /**
   *
   * @param {Opponent} opponent
   */

  constructor(opponent = new Oppenent()) {
    this.#opponent = opponent;
    this.#opponentGongs = this.#opponent.getGongs();
  }
}

export default Game;
