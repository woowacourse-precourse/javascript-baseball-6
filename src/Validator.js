import ErrorCatcher from './ErrorCatcher.js';

export const validateNumbers = (numbers) => {
  ErrorCatcher.validateType(numbers);
  ErrorCatcher.validateRange(numbers);
  ErrorCatcher.validateLength(numbers);
  ErrorCatcher.validateUnique(numbers);
};

export const validateStartOrder = (number) =>
  ErrorCatcher.validateOrder(number);
