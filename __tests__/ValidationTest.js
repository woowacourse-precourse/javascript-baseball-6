import Validator from '../src/BaseballGame/Validator/index.js';
import { ERROR } from '../src/BaseballGame/constants/index.js';

describe('Validator 클래스 테스트', () => {
  test('숫자 야구 입력 시 서로 다른 3자리 숫자를 입력하는 경우', () => {
    const inputs = ['123', '546', '193'];
    inputs.forEach((input) => {
      expect(() => Validator.validateGuessNumber(input)).not.toThrow();
    });
  });

  test('숫자 야구를 맞출 때 예외를 입력하는 경우', () => {
    const errGuessInputs = ['122', '21', 'ab2', '012'];
    errGuessInputs.forEach((errInput) => {
      expect(() =>
        Validator.validateGuessNumber(errInput).toThrow(ERROR.INVALID_LENGTH)
      );
    });
  });

  test('게임 재시작 여부를 올바르게 입력하는 경우', () => {
    const inputs = ['1', '2'];
    inputs.forEach((input) => {
      expect(() => Validator.validateControlNumber(input).not.toThrow());
    });
  });

  test('게임 재시작 여부에 예외를 입력하는 경우', () => {
    const errGuessInputs = ['3', '11', '22', 'a', ' '];
    errGuessInputs.forEach((errInput) => {
      expect(() =>
        Validator.validateControlNumber(errInput).toThrow(
          ERROR.INVALID_CONTROL_NUM
        )
      );
    });
  });
});
