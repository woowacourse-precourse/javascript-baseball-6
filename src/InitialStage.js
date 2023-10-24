import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGES from "./Messages.js";

/**
 * 초기 단계(사용자 입력 직전까지)를 담당하는 클래스
 * 1. 게임 시작 메시지를 출력한다.
 * 2. 상대방(컴퓨터)의 숫자를 생성한다.
 */
class InitialStage {
  /** @type {MESSAGES} */
  #message;

  /** @type {[number, number, number]}  */
  #numbers;

  /**
   * 생성자: 출력 메세지, 숫자들을 담을 배열을 생성한다.
   */
  constructor() {
    this.#message = MESSAGES.GAME_START;
    this.#numbers = [];
  }

  /**
   * 게임 시작 메시지를 출력한다.
   */
  messagePrint() {
    Console.print(this.#message);
  }

  /**
   * 상대방(컴퓨터)의 숫자 3자리를 생성한다.
   * @returns {[number, number, number]}
   */
  generateNumbers() {
    while (this.#numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#numbers.includes(number)) {
        this.#numbers.push(number);
      }
    }
    return this.#numbers;
  }
}

export default InitialStage;
