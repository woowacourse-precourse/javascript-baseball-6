import { GAME_NUM_LENGTH } from "./constant/rule.js";
import { ONLY_NUMBER_1_TO_9_REGEX } from "./constant/validation.js";

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
}
