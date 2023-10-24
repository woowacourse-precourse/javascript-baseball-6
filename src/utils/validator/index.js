import { ERROR_MESSAGE } from '../../constants/Messages.js';
import { isDuplication, isExactLength, isNumber, isParticularNumber } from './utils/index.js';
import ValidationError from '../error/ValidationError.js';
import { GAME_COMMAND, GAME_NUMBER } from '../../constants/System.js';

const Validators = {
  /**
   * @param {string} input
   */
  checkGameNumbers(input) {
    const { number, exclude, duplication, length } = ERROR_MESSAGE;
    if (!isNumber(input)) throw new ValidationError(number);
    if (isParticularNumber(input, GAME_NUMBER.without_number)) {
      throw new ValidationError(exclude(GAME_NUMBER.without_number));
    }
    if (isDuplication(input)) throw new ValidationError(duplication);
    if (!isExactLength(input, GAME_NUMBER.length)) {
      throw new ValidationError(length(GAME_NUMBER.length));
    }
  },

  /**
   * @param {string} input
   */
  checkGameCommand(input) {
    const { restart, end } = GAME_COMMAND;
    if (!(isParticularNumber(input, restart) || isParticularNumber(input, end))) {
      throw new ValidationError(ERROR_MESSAGE.game_command(restart, end));
    }
  },
};

export default Validators;
