import ErrorCatcher from './ErrorCatcher.js';

export const validateNumbers = (numbers) => {
  ErrorCatcher.validateLength(numbers);
  ErrorCatcher.validateType(numbers);
  ErrorCatcher.validateUnique(numbers);
};

export const validateRetry = (number) => ErrorCatcher.validateOrder(number);
