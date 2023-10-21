import { ANSWER, ERROR, NUMBER_LENGTH } from './Constants.js';

export default class Validator {
  static validateUserInput(answer) {
    if ([...answer].length !== NUMBER_LENGTH) {
      throw new Error(ERROR.NUMBER_LENGTH);
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
