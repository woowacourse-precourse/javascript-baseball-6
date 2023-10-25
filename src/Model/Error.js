import { ERROR } from '../constants/error.js';

const formatMessage = (message) => `[ERROR] ${message}`;

export class CustomError extends Error {
  constructor(message) {
    super(formatMessage(message));
  }
}

export class InputViewError extends CustomError {
  constructor(message) {
    super(message);

    this.name = ERROR.NAME.INPUT_VIEW;
  }
}

export class BaseballNumberError extends CustomError {
  constructor(message) {
    super(message);

    this.name = ERROR.NAME.BASEBALL_NUMBER;
  }
}
