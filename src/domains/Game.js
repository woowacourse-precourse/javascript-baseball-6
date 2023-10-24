// 한판의 게임을 책임지는 클래스

import Oppenent from './Opponent.js';
import { GAME_MESSAGES } from '../constants/gameMessages.js';
// eslint-disable-next-line no-unused-vars
import Gong from './Gong.js';

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
   * @type {[number, number, number]}
   */

  #userGongs;

  /**
   *
   * @param {Oppenent} opponent
   */

  constructor(opponent = new Oppenent()) {
    this.#opponent = opponent;
    this.#opponentGongs = this.#opponent.getGongs();
  }

  /**
   * @typedef {object} CompareResult
   * @property {boolean} success - 성공 여부
   * @property {number} [strikes] - 스트라이크 수
   * @property {number} [balls] - 볼 수
   * @property {string} message - 메시지
   */

  /**
   * 비교 결과를 반환
   * @param {Gong} gongs
   * @returns {CompareResult}
   */

  compareBalls(gongs) {
    this.#userGongs = gongs.getGongs();
    const { ALL_MATCH, BALLS_COUNT, STRIKES_COUNT, NOTHING } = GAME_MESSAGES;

    const strikes = this.getStrikes();
    const balls = this.getBalls();

    if (strikes === 3) {
      return {
        success: true,
        strikes,
        balls,
        message: ALL_MATCH,
      };
    }

    const messages = [balls && BALLS_COUNT(balls), strikes && STRIKES_COUNT(strikes)].filter(
      Boolean,
    );
    const message = messages.length ? messages.join(' ') : NOTHING;

    return { success: false, message };
  }

  /**
   *
   * @returns {number}
   */

  getStrikes() {
    let strikes = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.#opponentGongs.length; i++) {
      if (this.#opponentGongs[i] === this.#userGongs[i]) {
        strikes++;
      }
    }
    return strikes;
  }

  /**
   *
   * @returns {number}
   */

  getBalls() {
    const commonBalls = this.#userGongs.filter((ball) => this.#opponentGongs.includes(ball)).length;

    const strikes = this.#userGongs.filter(
      (ball, index) => ball === this.#opponentGongs[index],
    ).length;

    return commonBalls - strikes;
  }
}

export default Game;
