import { MissionUtils } from "@woowacourse/mission-utils";

// 공들을 관리하는 클래스

class Gong {
  /** @type {number} */
  static GONGS_LENGTH = 3;

  constructor() {}

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
}

export default Gong;
