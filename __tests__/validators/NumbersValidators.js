import ERROR from '../../src/constants/error.js';
import NumbersValidator from '../../src/validators/NumbersValidator.js';

describe('숫자 입력 예외 상황 테스트', () => {
  test('숫자가 3자리가 아닌 경우 예외처리를 한다.', () => {
    const value = '12';
    const result = () => NumbersValidator.validateLength(value);
    expect(result).toThrow(ERROR.numbers.length);
  });

  test('숫자가 3자리인 경우 undefined를 반환한다.', () => {
    const value = '123';
    const result = NumbersValidator.validateLength(value);
    expect(result).toEqual(true);
  });
});
