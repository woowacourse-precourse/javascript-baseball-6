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

  test.each(cases)('사용자 $input을 통해 에러를 반환한다.', ({ input, expected }) => {
    // when
    const result = () => NumbersValidator.validateNumbers(input);

    // then
    expect(result).toThrow(expected);
  });
});
