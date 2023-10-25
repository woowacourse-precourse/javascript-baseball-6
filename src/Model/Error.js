import { ERROR_NAME } from '../constants/errorName.js';

const formatMessage = (message) => `[ERROR] ${message}`;

const ERROR_NAME = Object.freeze({
  INPUT_VIEW: 'InputView',
  BASEBALL_NUMBER: 'BaseballNumber',
  BASEBALL_GAME: 'BaseballGame',
});

export class CustomError extends Error {
  constructor(message) {
    super(formatMessage(message));
  }
}

export class InputViewError extends CustomError {
  constructor(message) {
    super(message);

    this.name = ERROR_NAME.INPUT_VIEW;
  }
}
