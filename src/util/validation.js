import { ERROR_MASSAGE } from '../contants.js';

export function guessAnswerValidate(answer) {
  const duplicate = new Set(answer);

  if (!answer.split('').every((number) => number.charCodeAt() >= 49 && number.charCodeAt() <= 57)) {
    throw new Error(ERROR_MASSAGE.OUT_OF_RANGE);
  }

  if (answer.length !== 3 || duplicate.size !== 3) {
    throw new Error(ERROR_MASSAGE.DIFFRENT_NUMBERS);
  }
}

export function retryAnswerValidate(answer) {
  if (!answer.split('').every((number) => number.charCodeAt() >= 49 && number.charCodeAt() <= 50)) {
    throw new Error(ERROR_MASSAGE.NOT_CORRECT);
  }

  if (answer.length !== 1) {
    throw new Error(ERROR_MASSAGE.ONLY_NUMBER);
  }
}
