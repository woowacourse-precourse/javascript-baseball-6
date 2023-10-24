import { ERROR } from '../src/constants';
import Validate from '../src/validate';

describe('validate test', () => {
  test('입력하는 숫자가 3자리여야 합니다.', () => {
    expect(() => Validate.inputDifferent('123')).not.toThrow();
    expect(() => Validate.inputTrebleFigures('1234')).toThrow(ERROR.TREBLE_FIGURES);
  });

  test('숫자를 입력하셔야 합니다.', () => {
    expect(() => Validate.inputTypeofNumber('abc')).toThrow(ERROR.TYPE_NUMBER);
  });

  test('중복되는 숫자가 있으면 안됩니다.', () => {
    expect(() => Validate.inputDifferent('123')).not.toThrow();
    expect(() => Validate.inputDifferent('112')).toThrow(ERROR.DIFFERENT_NUMBER);
  });

  test('재시작하려면 1, 종료하려면 2를 입력하여야 합니다.', () => {
    expect(() => Validate.inputProperRegameNumber('1')).not.toThrow();
    expect(() => Validate.inputProperRegameNumber('2')).not.toThrow();
    expect(() => Validate.inputProperRegameNumber('a')).toThrow(ERROR.REGAME_NUMBER);
    expect(() => Validate.inputProperRegameNumber('3')).toThrow(ERROR.REGAME_NUMBER);
  });
});
