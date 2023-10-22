import { Console } from "@woowacourse/mission-utils";
import { GAME_START_MESSAGE, GAME_OVER_MESSAGE, GAME_END_INSTRUCTION, STRIKE_TEXT, BALL_TEXT, NOTHING_TEXT } from "./constants/MessageConstants.js";

export default class GameDisplay {
  showStartMessage() {
    Console.print(GAME_START_MESSAGE);
  }

  showResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print(NOTHING_TEXT);
    } else {
      const results = [];
      if (ball > 0) results.push(`${ball}${BALL_TEXT}`);
      if (strike > 0) results.push(`${strike}${STRIKE_TEXT}`);
      Console.print(results.join(' '));
    }
  }

  showWinMessage() {
    Console.print(GAME_OVER_MESSAGE);
  }

  async showEndMessage() {
    return await Console.readLineAsync(GAME_END_INSTRUCTION);
  }
}
