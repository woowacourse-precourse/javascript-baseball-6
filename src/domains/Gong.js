import { MissionUtils } from "@woowacourse/mission-utils";
import { errorMessages } from "../constants/errorMessages.js";
import AppError from "../error/AppError.js";

// 공들을 관리하는 클래스

class Gong {
  /** @type {number} */
  static GONGS_LENGTH = 3;

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

  static fromString(gongString) {
    const trimmedGongString = gongString.replace(/\s+/g, "");
    const gongs = trimmedGongString.split("").map((str) => Number(str));
    return new Gong(gongs);
  }

  validate() {
    this.validateOfType();
    this.validateOfLength();
    this.validateOfDupliacation();
  }

  validateOfLength() {
    if (this.#gongs.length !== Gong.GONGS_LENGTH) {
      throw new AppError(errorMessages.NOT_MATCH_LENGTH);
    }
  }

  validateOfType() {
    if (this.#gongs.some(isNaN)) {
      throw new AppError(errorMessages.NOT_A_NUMBER);
    }
  }

  validateOfDupliacation() {
    if (this.#gongs.length !== new Set(this.#gongs).size) {
      throw new AppError(errorMessages.HAVE_DUPLICATION);
    }
  }
}

export default Gong;
