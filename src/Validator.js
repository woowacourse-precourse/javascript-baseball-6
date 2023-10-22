import ErrorCatcher from './ErrorCatcher.js';

export const validateNumbers = (numbers) => {
  ErrorCatcher.validateLength(numbers);
  ErrorCatcher.validateType(numbers);
  ErrorCatcher.validateUnique(numbers);
};

export const validateStartOrder = (number) =>
  ErrorCatcher.validateOrder(number);
