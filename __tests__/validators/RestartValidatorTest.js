import ERROR from '../../src/constants/error.js';
import RestartValidator from '../../src/validators/RestartValidator.js';

describe('게임 재시작 여부 입력 예외 상황 테스트', () => {
  test('1, 2가 아닌 다른 값을 입력한 경우 예외처리를 한다.', () => {
    // given
    const value = '0';

    // when
    const result = () => RestartValidator.validateRestartChoice(value);

    // then
    expect(result).toThrow(ERROR.restart.choice);
  });

  test('1, 2의 값을 입력한 경우 true를 반환한다.', () => {
    // given
    const value = '1';

    // when
    const result = RestartValidator.validateRestartChoice(value);

    // then
    expect(result).toEqual(true);
  });

  test('값이 음수일 경우 예외처리를 한다.', () => {
    // given
    const value = '-1';

    // when
    const result = () => RestartValidator.validateNegative(value);

    // then
    expect(result).toThrow(ERROR.numbers.negative);
  });

  test('값이 양수일 경우 true를 반환한다.', () => {
    // given
    const value = '1';

    // when
    const result = RestartValidator.validateNegative(value);

    // then
    expect(result).toEqual(true);
  });

  test('값이 숫자가 아닌 경우 예외처리를 한다.', () => {
    // given
    const value = 'asd';

    // when
    const result = () => RestartValidator.validateNaN(value);

    // then
    expect(result).toThrow(ERROR.numbers.notANumber);
  });

  test('값이 숫자인 경우 true를 반환한다.', () => {
    // given
    const value = '1';

    // when
    const result = RestartValidator.validateNaN(value);

    // then
    expect(result).toEqual(true);
  });

  test('값을 입력하지 않았을 경우 예외처리를 한다.', () => {
    // given
    const value = '';

    // when
    const result = () => RestartValidator.validateEmpty(value);

    // then
    expect(result).toThrow(ERROR.restart.notANumber);
  });

  test('값을 입력했을 경우 true를 반환한다.', () => {
    // given
    const value = '1';

    // when
    const result = RestartValidator.validateEmpty(value);

    // then
    expect(result).toEqual(true);
  });
});
