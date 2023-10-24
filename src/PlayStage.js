import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGES from "./Messages.js";

/**
 * 사용자 입력 후 결과 출력까지 담당하는 클래스
 * 1. 사용자 입력을 받는다.
 * 2. 사용자 입력이 형식에 맞지 않을 경우 예외를 발생시킨다.
 * 3. 사용자 입력이 정상적일 경우 결과를 출력한다.
 */
class PlayStage {
  /** @type {MESSAGES} */
  #message;

  /** @type {[number, number, number]} */
  #numbers;

  /** @type {number} */
  #strikeCount;

  /** @type {number} */
  #ballCount;

  /** @type {boolean} */
  #isValid;

  /**
   * 생성자: 입력 메세지, 숫자들이 담긴 배열을 가져오고,
   * 스트라이크, 볼 카운트를 0으로 초기화한다.
   * @param {[number, number, number]} numbers 숫자들이 담긴 배열
   */
  constructor(numbers) {
    this.#message = MESSAGES.INPUT_NUMBER;
    this.#numbers = numbers;
    this.#strikeCount = 0;
    this.#ballCount = 0;
    this.#isValid = true;
  }

  /**
   * 사용자의 숫자 입력을 받는다. (String)
   * @returns {Promise} 입력된 숫자 값
   */
  #numberInput() {
    return Console.readLineAsync(this.#message);
  }

  /**
   * 사용자의 입력이 형식에 맞지 않을 경우 예외를 발생시킨다.
   * @param {string} text 사용자의 입력
   */
  setIsValid(text) {
    if (!/^[1-9]{3}$/.test(text)) {
      this.#isValid = false;
      return;
    }

    const temp = text.split("").map(Number);
    if (temp[0] === temp[1] || temp[1] === temp[2] || temp[0] === temp[2]) {
      this.#isValid = false;
    }
  }

  /**
   * isValid를 반환한다.
   * @return {boolean}
   */
  getIsValid() {
    return this.#isValid;
  }

  /**
   * 사용자의 입력에 따라 결과를 출력한다.
   */
  async run() {
    while (this.#strikeCount !== 3) {
      const input = await this.#numberInput();
      this.#checkValidation(input);
      if (!this.#isValid) {
        Console.print(MESSAGES.WRONG_INPUT);
        break;
      }

      const inputNumbers = input.split("").map(Number);
      this.#strikeCount = this.#getStrikeCount(inputNumbers);
      this.#ballCount = this.#getBallCount(inputNumbers);
      this.#printResult();
    }
  }
}

export default PlayStage;
