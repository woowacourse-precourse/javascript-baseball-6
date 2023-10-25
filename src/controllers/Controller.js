import Opponent from "../models/Opponent.js";
import User from "../models/User.js";

import GAME_START_VIEW from "../views/GameStartView.js";
import INPUT_NUMBER_VIEW from "../views/InputNumberView.js";

import RANDOM_NUMBER from "../utils/RandomNumber.js";
import CHECK_VALIDATION from "../utils/CheckValidation.js";

import MESSAGES from "../constants/Messages.js";

/**
 * @class Controller
 * 1. 상대방(컴퓨터) 숫자를 생성한다
 * 2. 상대방의 숫자와 사용자가 입력한 숫자를 비교하여 평가한다
 */
class Controller {
  /** @type {Opponent} */
  #opponent;

  /** @type {User} */
  #user;

  /**
   * 게임을 실행하는 함수
   */
  async run() {
    // 게임 시작
    GAME_START_VIEW();
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

  /**
   * 사용자의 숫자를 입력받는 함수
   * @returns {number}
   */
  async saveUserInput() {
    const userInput = await INPUT_NUMBER_VIEW();
    if (!CHECK_VALIDATION(userInput)) throw new Error(MESSAGES.WRONG_INPUT);
    this.#user.setNumber(userInput);
    return this.#user.getNumber();
  }
}

export default Controller;
