import { GAME_MESSAGES } from "../utils/constants";
import { print } from "../utils/missionUtils";

export default class OutputView {
  printStart() {
    print(GAME_MESSAGES.START);
  }
}
