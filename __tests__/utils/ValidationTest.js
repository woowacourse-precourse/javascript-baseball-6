import {
  isCorrectPlayerInput,
  isCorrectRetryInput,
} from '../../src/utils/Validation.js';

describe('Validation Test', () => {
  it.each(['this is wrong input', '1    2', 'woowaprecourse', '123456', '012'])(
    'Player Input Validation Test',
    (wrongPlayerInput) => {
      // when & then
      expect(() => isCorrectPlayerInput(wrongPlayerInput)).toThrow('[ERROR]');
    }
  );

  it.each(['this is wrong input', '1    2', 'woowaprecourse', '123456', '012'])(
    'Retry Input Validation Test',
    (wrongRetryInput) => {
      // when & then
      expect(() => isCorrectRetryInput(wrongRetryInput)).toThrow('[ERROR]');
    }
  );
});
