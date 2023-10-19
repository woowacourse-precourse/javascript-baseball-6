import { GAME_MESSAGES, GAME_RESULTS } from "../utils/constants";
import { print } from "../utils/missionUtils";

export default class OutputView {
  printStart() {
    print(GAME_MESSAGES.START);
  }

  getResultString(matchResult) {
    const text = [GAME_RESULTS.BALL, GAME_RESULTS.STRIKE];
    const parsedResults = matchResult.map((item, idx) => {
      if (!item) return;
      return item.toString() + text[idx];
    });
    return parsedResults.join(" ");
  }

  printNoMatch() {
    print(GAME_RESULTS.NO_MATCH);
  }
}
