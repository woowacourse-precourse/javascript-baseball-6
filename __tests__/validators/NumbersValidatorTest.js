import ERROR from '../../src/constants/error.js';
import NumbersValidator from '../../src/validators/NumbersValidator.js';

describe('숫자 입력 예외 상황 테스트', () => {
  const cases = [
    {
      input: '12',
      description: '숫자가 3자리가 아닌 경우 예외처리를 한다.',
      expected: ERROR.numbers.length,
    },
    {
      input: 'asd',
      description: '숫자가 아닌 경우 예외처리를 한다.',
      expected: ERROR.numbers.notANumber,
    },
    {
      input: '-123',
      description: '숫자가 음수인 경우 예외처리를 한다.',
      expected: ERROR.numbers.negative,
    },
    {
      input: '122',
      description: '숫자가 중복된 경우 예외처리를 한다.',
      expected: ERROR.numbers.duplicated,
    },
    {
      input: '',
      description: '숫자를 입력하지 않을 경우 예외처리를 한다',
      expected: ERROR.numbers.empty,
    },
  ];

  test.each(cases)('', ({ input, expected }) => {
    // when
    const result = () => NumbersValidator.validateNumbers(input);

    // then
    expect(result).toThrow(expected);
  });

  // test('숫자가 3자리가 아닌 경우 예외처리를 한다.', () => {
  //   // given
  //   const value = '12';

  //   // when
  //   const result = () => NumbersValidator.validateLength(value);

  //   // then
  //   expect(result).toThrow(ERROR.numbers.length);
  // });

  // test('숫자가 아닌 경우 예외처리를 한다.', () => {
  //   // given
  //   const value = 'asd';

  //   // when
  //   const result = () => NumbersValidator.validateNaN(value);

  //   // then
  //   expect(result).toThrow(ERROR.numbers.notANumber);
  // });

  // test('숫자가 음수인 경우 예외처리를 한다.', () => {
  //   // given
  //   const value = '-123';

  //   // when
  //   const result = () => NumbersValidator.validateNegative(value);

  //   // then
  //   expect(result).toThrow(ERROR.numbers.negative);
  // });

  // test('숫자가 중복된 경우 예외처리를 한다.', () => {
  //   // given
  //   const value = '122';

  //   // when
  //   const result = () => NumbersValidator.validateDuplicated(value);

  //   // then
  //   expect(result).toThrow(ERROR.numbers.duplicated);
  // });

  // test('숫자를 입력하지 않을 경우 예외처리를 한다', () => {
  //   // given
  //   const value = '';

  //   // when
  //   const result = () => NumbersValidator.validateEmpty(value);

  //   // then
  //   expect(result).toThrow(ERROR.numbers.empty);
  // });
});
