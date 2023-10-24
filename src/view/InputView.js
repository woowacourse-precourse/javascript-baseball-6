import { Console } from "@woowacourse/mission-utils";
import Validator from "../validator/Validator.js";
import ValidationError from "../validator/ValidationError.js";
import SETTING from "../constants/setting.js";
import MESSAGE from "../constants/message.js";

const InputView = {
  readGuessNumber: async () => {
    const { SIZE, RANGE: { MIN, MAX } } = SETTING.RULE;
    const guessNumber = await Console.readLineAsync(MESSAGE.INPUT.GUESS_NUMBER);

    if (!Validator.isNumber(guessNumber)) {
      throw new ValidationError(MESSAGE.ERROR.INVALID_NUMBER);
    }

    if (!Validator.hasUniqueValue(guessNumber)) {
      throw new ValidationError(MESSAGE.ERROR.DUPLICATED);
    }

    if (!Validator.isValidLength(guessNumber, { size: SIZE })) {
      throw new ValidationError(MESSAGE.ERROR.INVALID_LENGTH);
    }

    if (!Validator.isValidRange(guessNumber, { min: MIN, max: MAX })) {
      throw new ValidationError(MESSAGE.ERROR.INVALID_RANGE);
    }

    return Number(guessNumber);
  },
  readRestartAnswer: async () => {
    const { RESTART, EXIT } = SETTING.COMMAND;
    const answer = await Console.readLineAsync(MESSAGE.INPUT.RESTART);

    if (!Validator.isExitOrRestart(answer, { restart: RESTART, exit: EXIT })) {
      throw new ValidationError(MESSAGE.ERROR.INVALID_RESTART_COMMAND);
    }

    return Number(answer);
  }
};

export default InputView;