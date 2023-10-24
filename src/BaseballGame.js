import { Console } from "@woowacourse/mission-utils";
import { GAME_STATUS, GAME_ACTIONS, MESSAGES, REG_EX } from "./constants";
import { generateRandomNumberArray, getValidInput } from "./utils";

export class BaseballGame {
  constructor() {
    this.answer = [];
  }

  /** 게임 시작하는 메소드 */
  async start() {
    Console.print(MESSAGES.GAME_START);

    this.answer = generateRandomNumberArray({ length: 3 });

    while (true) {
      const input = await getValidInput({ regEx: REG_EX.USER_INPUT });

      const { ball, strike } = this.#getBallStrikeFromInput(input, this.answer);

      const status = this.#getGameStatusFromBallStrike(ball, strike);

      if (status === GAME_STATUS.END) break;
    }
  }

  /** 게임을 재시작할지 종료할지 입력받는 함수 */
  async askForRestartOrExit() {
    const finishControlInput = await Console.readLineAsync(
      MESSAGES.INPUT_ACTION
    );

    if (finishControlInput === "1") return GAME_ACTIONS.RESTART;

    if (finishControlInput === "2") return GAME_ACTIONS.EXIT;

    throw new Error(MESSAGES.INPUT_ERROR);
  }

  /** 입력받은 input과 answer를 비교해서 볼, 스트라이크 수를 리턴하는 메소드 */
  #getBallStrikeFromInput(input, answer) {
    const inputNumberArray = input.toString().split("").map(Number);
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (answer.includes(inputNumberArray[i])) {
        if (answer[i] === inputNumberArray[i]) {
          strike++;
        } else {
          ball++;
        }
      }
    }

    return { ball, strike };
  }

  /** 볼, 스트라이크 개수로 게임 상태를 리턴하는 메소드 */
  #getGameStatusFromBallStrike(ball, strike) {
    if (strike === 3) {
      Console.print(MESSAGES.COMPARE_RESULT.ALL_MATCH);
      return GAME_STATUS.END;
    }

    if (!strike && !ball) {
      Console.print(MESSAGES.COMPARE_RESULT.NO_MATCH);
      return GAME_STATUS.CONTINUE;
    }

    Console.print(MESSAGES.COMPARE_RESULT.BALL_STRIKE(ball, strike));
    return GAME_STATUS.CONTINUE;
  }
}
