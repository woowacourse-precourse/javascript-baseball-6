import { ERROR_MESSAGE } from './constants/Message.js';
import { GAME_SETTING } from './constants/Setting.js';

class Validate {
  userPickNumbers(value) {
    if (
      value === undefined ||
      value.length !== GAME_SETTING.REQUIRED_PICK_COUNT
    ) {
      throw new Error(ERROR_MESSAGE.INPUT_USER_PICK);
    }

    const valueArr = [
      ...new Set(
        value
          .split('')
          .map((element) => +element)
          .filter((element) => !isNaN(element))
          .filter(
            (element) =>
              element >= GAME_SETTING.MIN_PICK_NUMBER &&
              element <= GAME_SETTING.MAX_PICK_NUMBER,
          ),
      ),
    ];

    if (valueArr.length !== GAME_SETTING.REQUIRED_PICK_COUNT) {
      throw new Error(ERROR_MESSAGE.INPUT_USER_PICK);
    }
  }

  restartOrExit(value) {
    if (
      !(
        value === GAME_SETTING.RESTART_NUMBER ||
        value === GAME_SETTING.EXIT_NUMBER
      )
    )
      throw new Error(ERROR_MESSAGE.INPUT_RESTART_OR_EXIT);
  }
}

export default Validate;
