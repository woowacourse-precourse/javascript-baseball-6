import AppError from '../error/AppError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';

export const SELECTED = Object.freeze({
  RESTART_GAME: '1',
  END_GAME: '2',
});

// eslint-disable-next-line jsdoc/require-returns
/**
 *
 * @param {string} endOrRestartInput
 */
export const selectEndOrRestart = (endOrRestartInput) => {
  if (endOrRestartInput === SELECTED.RESTART_GAME) {
    return SELECTED.RESTART_GAME;
  }
  if (endOrRestartInput === SELECTED.END_GAME) {
    return SELECTED.END_GAME;
  }

  throw new AppError(ERROR_MESSAGES.NOT_MATCH_END_OR_RESTART);
};
