import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import AppError from '../error/AppError.js';

// 공들을 관리하는 클래스

class Gong {
  /**
   *  @member {number} GONGS_LENGTH
   *  @member {number} GONG_MIN_NUM
   *  @member {number} GONG_MAX_NUM
   */
  static GONGS_LENGTH = 3;

  static GONG_MIN_NUM = 1;

  static GONG_MAX_NUM = 9;

  /**
   * @type {[number, number, number]}
   */

  #gongs;

  constructor(gongs) {
    this.#gongs = gongs;
    this.validate();
  }

  /**
   * 게임이 시작될때 상대방에게 새로운 정답을 리턴해주는 함수
   * @returns {[number, number, number]}
   */

  static getNewGongs() {
    const numbers = [];
    while (numbers.length < Gong.GONGS_LENGTH) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  }

  getGongs() {
    return this.#gongs;
  }

  static fromString(gongString) {
    const gongs = gongString.split('').map((str) => parseInt(str, 10));
    return new Gong(gongs);
  }

  validate() {
    this.validateOfType();
    this.validateOfLength();
    this.validateOfRange();
    this.validateOfDupliacation();
  }

  validateOfType() {
    if (this.#gongs.some(Number.isNaN)) {
      throw new AppError(ERROR_MESSAGES.NOT_A_NUMBER);
    }
  }

  validateOfLength() {
    if (this.#gongs.length !== Gong.GONGS_LENGTH) {
      throw new AppError(ERROR_MESSAGES.NOT_MATCH_LENGTH);
    }
  }

  validateOfRange() {
    if (!this.#gongs.every((num) => num >= Gong.GONG_MIN_NUM && num <= Gong.GONG_MAX_NUM)) {
      throw new AppError(ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }

  validateOfDupliacation() {
    if (this.#gongs.length !== new Set(this.#gongs).size) {
      throw new AppError(ERROR_MESSAGES.HAVE_DUPLICATION);
    }
  }
}

export default Gong;
