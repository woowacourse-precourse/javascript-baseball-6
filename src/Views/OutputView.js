import { MissionUtils } from "@woowacourse/mission-utils";
import {
  GAME_CONSTANTS,
  GAME_MESSAGES,
  GAME_RESULTS,
} from "../utils/constants.js";

export default class OutputView {
  printStart() {
    MissionUtils.Console.print(GAME_MESSAGES.START);
  }

  printMatchResult(matchResult) {
    const [ball, strike] = matchResult;
    if (strike === GAME_CONSTANTS.STRIKE_OUT_COUNT) {
      this.#printGameWin(matchResult);
      return;
    }
    if (!ball && !strike) {
      this.#printNoMatch();
      return;
    }
    const resultText = this.#getResultString(matchResult);
    MissionUtils.Console.print(resultText);
  }

  #getResultString(matchResult) {
    const text = [GAME_RESULTS.BALL, GAME_RESULTS.STRIKE];
    const parsedResults = matchResult.map((item, idx) => {
      if (!item) return;
      return item.toString() + text[idx];
    });
    return parsedResults.join(" ");
  }

  #printGameWin(matchResult) {
    const strikeText = this.#getResultString(matchResult);
    MissionUtils.Console.print(`${strikeText}\n${GAME_MESSAGES.FINISH}`);
  }

  #printNoMatch() {
    MissionUtils.Console.print(GAME_RESULTS.NO_MATCH);
  }
}
