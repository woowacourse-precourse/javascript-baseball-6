import ERROR from '../../src/constants/error.js';
import NumbersValidator from '../../src/validators/NumbersValidator.js';

describe('숫자 입력 예외 상황 테스트', () => {
  test('숫자가 3자리가 아닌 경우 예외처리를 한다.', () => {
    // given
    const value = '12';

    // when
    const result = () => NumbersValidator.validateLength(value);

    // then
    expect(result).toThrow(ERROR.numbers.length);
  });

  test('숫자가 3자리인 경우 true를 반환한다.', () => {
    // given
    const value = '123';

    // when
    const result = NumbersValidator.validateLength(value);

    // then
    expect(result).toEqual(true);
  });

  test('숫자가 아닌 경우 예외처리를 한다.', () => {
    // given
    const value = 'asd';

    // when
    const result = () => NumbersValidator.validateNaN(value);

    // then
    expect(result).toThrow(ERROR.numbers.notANumber);
  });

  test('숫자인 경우 true를 반환한다.', () => {
    // given
    const value = '123';

    // when
    const result = NumbersValidator.validateNaN(value);

    // then
    expect(result).toEqual(true);
  });

  test('숫자가 음수인 경우 예외처리를 한다.', () => {
    // given
    const value = '-123';

    // when
    const result = () => NumbersValidator.validateNegative(value);

    // then
    expect(result).toThrow(ERROR.numbers.negative);
  });

  test('숫자가 양수인 경우 true를 반환한다.', () => {
    // given
    const value = '123';

    // when
    const result = NumbersValidator.validateNaN(value);

    // then
    expect(result).toEqual(true);
  });

  test('숫자가 중복된 경우 예외처리를 한다', () => {
    // given
    const value = '122';

    // when
    const result = () => NumbersValidator.validateDuplicated(value);

    // then
    expect(result).toThrow(ERROR.numbers.duplicated);
  });

  test('숫자가 중복되지 않은 경우 true를 반환한다.', () => {
    // given
    const value = '123';

    // when
    const result = NumbersValidator.validateNaN(value);

    // then
    expect(result).toEqual(true);
  });

  test('숫자를 입력하지 않을 경우 예외처리를 한다', () => {
    // given
    const value = '';

    // when
    const result = () => NumbersValidator.validateEmpty(value);

    // then
    expect(result).toThrow(ERROR.numbers.empty);
  });

  test('숫자를 입력했을 경우 true를 반환한다.', () => {
    // given
    const value = '123';

    // when
    const result = NumbersValidator.validateEmpty(value);

    // then
    expect(result).toEqual(true);
  });
});
