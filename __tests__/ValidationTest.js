import MainValidation from '../src/validation/MainValidation';
import RestartValidation from '../src/validation/RestartValidation';

describe('Validation Test', () => {
  test.each(['this is wrong input', '!23', '012', '12', '1234', '112'])(
    'Main Input Validation Test',
    (input) => {
      expect(() => {
      // when & then
        new MainValidation(input.split('').map(Number));
      }).toThrow('[ERROR]');
    }
  );

  test.each(['this is wrong input', '3', '12', 'a', '!'])(
    'Restart Input Validation Test',
    (input) => {
      expect(() => {
      // when & then
        new RestartValidation(input.split(''));
      }).toThrow('[ERROR]');
    }
  );
});
