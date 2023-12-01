import ERROR from '../../src/constants/error.js';
import RestartValidator from '../../src/validators/RestartValidator.js';

describe('게임 재시작 여부 입력 예외 상황 테스트', () => {
  const cases = [
    {
      input: '0',
      description: '1, 2가 아닌 다른 값을 입력한 경우 예외처리를 한다.',
      expected: ERROR.restart.choice,
    },
    {
      input: '-1',
      description: '값이 음수일 경우 예외처리를 한다.',
      expected: ERROR.restart.negative,
    },
    {
      input: 'asd',
      description: '값이 숫자가 아닌 경우 예외처리를 한다.',
      expected: ERROR.numbers.notANumber,
    },
    {
      input: '',
      description: '값을 입력하지 않았을 경우 예외처리를 한다.',
      expected: ERROR.restart.empty,
    },
  ];

  test.each(cases)('게임 재시작 여부인 $input을 통해 에러를 반환한다.', ({ input, expected }) => {
    // when
    const result = () => RestartValidator.validateRestart(input);

    // then
    expect(result).toThrow(expected);
  });
});
