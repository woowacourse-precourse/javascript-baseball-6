// 상대방 (컴퓨터)를 정의하는 클래스
import Gong from './Gong.js';

class Oppenent {
  /**
   * @type {number[]}
   */

  #gongs;

  constructor() {
    this.#gongs = Gong.getNewGongs();
  }

  getGongs() {
    return this.#gongs;
  }
}

export default Oppenent;
