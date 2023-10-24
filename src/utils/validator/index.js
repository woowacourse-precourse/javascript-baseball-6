import { ERROR_MESSAGE } from '../../constants/Messages.js';
import { isDuplication, isExactLength, isNumber, isParticularNumber } from './utils/index.js';
import ValidationError from '../error/ValidationError.js';
import { GAME_COMMAND, GAME_NUMBER } from '../../constants/System.js';

const Validators = {
  checkGameNumbers(input) {
    if (!isNumber(input)) throw new ValidationError(ERROR_MESSAGE.number);
    if (isParticularNumber(input, GAME_NUMBER.without_number)) {
      throw new ValidationError(ERROR_MESSAGE.zero);
    }
    if (isDuplication(input)) throw new ValidationError(ERROR_MESSAGE.duplication);
    if (!isExactLength(input, GAME_NUMBER.length)) {
      throw new ValidationError(ERROR_MESSAGE.three_digit);
    }
  },

  checkGameCommand(input) {
    if (
      !(
        isParticularNumber(input, GAME_COMMAND.restart) ||
        isParticularNumber(input, GAME_COMMAND.end)
      )
    ) {
      throw new ValidationError(ERROR_MESSAGE.only_one_or_two);
    }
  },
};

export default Validators;
