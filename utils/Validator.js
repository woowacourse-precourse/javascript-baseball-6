import { ANSWER, ERROR, NUMBER_LENGTH } from './Constants';

export default class Validator {
  static validateUserInput(answer) {
    if ([...answer].length !== NUMBER_LENGTH) {
      throw new Error(ERROR.NUMBER_LENGTH);
    }
    if (![...answer].every((input) => !isNaN(input))) {
      throw new Error(ERROR.ONLY_NUMBER);
    }
    if (new Set([...answer]).size !== 3) {
      throw new Error(ERROR.NOT_DUPLICATION);
    }
    return answer;
  }

  static validateRetry(answer) {
    if (answer !== ANSWER.RESTART && answer !== ANSWER.FINISH) {
      throw new Error(ERROR.UNCORRECT_RETRY_ANSWER);
    }
    return answer;
  }
}
