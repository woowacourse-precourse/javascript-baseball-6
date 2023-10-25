import { Console } from "@woowacourse/mission-utils";

import Opponent from "../models/Opponent.js";
import User from "../models/User.js";

import GAME_START_VIEW from "../views/GameStartView.js";
import INPUT_NUMBER_VIEW from "../views/InputNumberView.js";
import OUTPUT_VIEW from "../views/OutputView.js";

import RANDOM_NUMBER from "../utils/RandomNumber.js";
import CHECK_VALIDATION from "../utils/CheckValidation.js";

import MESSAGES from "../constants/Messages.js";
import CONDITIONS from "../constants/Conditions.js";
import RESTART_VIEW from "../views/RestartView.js";

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

  /**
   * 상대방(컴퓨터)의 숫자와 사용자의 숫자를 비교하여 평가하는 함수
   */
  async matchNumber() {
    const opponentNumberElements = this.#opponent
      .getNumber()
      .toString()
      .split("")
      .map(Number);

    let strikeCount = 0;
    let ballCount = 0;
    while (strikeCount !== CONDITIONS.MAX_STRIKE_COUNT) {
      const userNumber = await this.saveUserInput();
      const userNumberElements = userNumber.toString().split("").map(Number);
      for (let i = 0; i < CONDITIONS.NUMBER_LENGTH; i += 1) {
        if (opponentNumberElements[i] === userNumberElements[i]) {
          strikeCount += CONDITIONS.COUNT;
        } else if (opponentNumberElements.includes(userNumberElements[i])) {
          ballCount += CONDITIONS.COUNT;
        }
      }
      Console.print(OUTPUT_VIEW(strikeCount, ballCount));
    }
    Console.print(MESSAGES.SUCCESS);
  }

  /**
   * 재시작 여부를 입력받는 함수
   */
  async saveUserRestart() {
    const isRestart = await RESTART_VIEW();
    if (isRestart === CONDITIONS.RESTART.YES) {
      this.#user.setRestart(true);
    } else if (isRestart === CONDITIONS.RESTART.NO) {
      this.#user.setRestart(false);
    } else {
      throw new Error(MESSAGES.WRONG_INPUT);
    }
  }
}

export default Controller;
