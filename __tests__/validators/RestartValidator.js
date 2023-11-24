import ERROR from '../../src/constants/error.js';
import RestartValidator from '../../src/validators/RestartValidator.js';

describe('게임 재시작 여부 입력 예외 상황 테스트', () => {
  test('1, 2가 아닌 다른 값을 입력한 경우 예외처리를 한다.', () => {
    const value = '0';
    const result = () => RestartValidator.validateRestartChoice(value);
    expect(result).toThrow(ERROR.restart.choice);
  });

  test('1, 2의 값을 입력한 경우 true를 반환한다.', () => {
    const value = '1';
    const result = RestartValidator.validateRestartChoice(value);
    expect(result).toEqual(true);
  });

  test('값이 음수일 경우 예외처리를 한다.', () => {
    const value = '-1';
    const result = () => RestartValidator.validateNegative(value);
    expect(result).toThrow(ERROR.numbers.negative);
  });

  test('값이 양수일 경우 true를 반환한다.', () => {
    const value = '1';
    const result = RestartValidator.validateNegative(value);
    expect(result).toEqual(true);
  });
});
