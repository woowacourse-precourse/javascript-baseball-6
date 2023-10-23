import { GAME_NUM_LENGTH, RESTART_NUM, QUIT_NUM } from "./constant/rule";
import { ONLY_NUMBER_1_TO_9_REGEX } from "./constant/validation";

export default class Validate {
  static isValidPlayerNumber(playerNum) {
    if (ONLY_NUMBER_1_TO_9_REGEX.test(playerNum)) {
      return false;
    }

    if (playerNum.length !== GAME_NUM_LENGTH) {
      return false;
    }

    if (new Set(playerNum).size !== GAME_NUM_LENGTH) {
      return false;
    }

    return true;
  }

  static isValidReStartNumber(num) {
    if (num === RESTART_NUM || num === QUIT_NUM) {
      return true;
    }

    return false;
  }
}
