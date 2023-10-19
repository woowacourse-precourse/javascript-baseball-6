import { GAME_MESSAGES, GAME_RESULTS } from "../utils/constants";
import { print } from "../utils/missionUtils";

export default class OutputView {
  printStart() {
    print(GAME_MESSAGES.START);
  }

  printNoMatch() {
    print(GAME_RESULTS.NO_MATCH);
  }
}
