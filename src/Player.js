import { MissionUtils } from "@woowacourse/mission-utils";
import GAME_MESSAGES from "./constants/GameMessages.js";
import ERROR_MESSAGES from "./constants/ErrorMessages.js";
import PLAYER_SIGNS from "./constants/PlayerSigns.js";

class Player {
  constructor() {}

  #isNumeric(input) {
    const regex = /^\d+$/;
    return regex.test(input);
  }

  #isValidLength(input) {
    return input.length === 3;
  }

  #isUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers.size === numbers.length;
  }

  #isValidRestartSign(input) {
    return (
      input === PLAYER_SIGNS.END_GAME.toString() ||
      input === PLAYER_SIGNS.RESTART_GAME.toString()
    );
  }

  getPlayerNumber() {
    return new Promise((resolve, reject) => {
      const playerInput = MissionUtils.Console.readLineAsync(
        GAME_MESSAGES.ENTER_NUMBER
      );

      playerInput.then((input) => {
        if (!this.#isNumeric(input)) {
          reject(new Error(ERROR_MESSAGES.INVALID_STRING));
        }

        if (!this.#isValidLength(input)) {
          reject(new Error(ERROR_MESSAGES.INVALID_INPUT_LENGTH));
        }

        if (!this.#isUniqueNumbers(input)) {
          reject(new Error(ERROR_MESSAGES.DUPLICATED));
        }

        resolve(input.split("").map((number) => parseInt(number)));
      });
    });
  }

  getRestartSign() {
    return new Promise((resolve, reject) => {
      const restartSign = MissionUtils.Console.readLineAsync(
        GAME_MESSAGES.CONFIRM_RESTART
      );

      restartSign.then((sign) => {
        if (!this.#isValidRestartSign(sign)) {
          reject(new Error(ERROR_MESSAGES.INVALID_RESTART_SIGN));
        }

        resolve(parseInt(sign));
      });
    });
  }
}

export default Player;
