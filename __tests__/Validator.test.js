import Validator from '../utils/Validator';

describe('Validator test', () => {
  it('3개의 값을 입력해야합니다', () => {
    expect(() => {
      Validator.validateUserInput('1234');
    }).toThrow('[ERROR]');
  });
  it('숫자만 입력해야합니다.', () => {
    expect(() => {
      Validator.validateUserInput('1f2');
    }).toThrow('[ERROR]');
  });
  it('중복된 숫자를 입력하면 안됩니다.', () => {
    expect(() => {
      Validator.validateUserInput('122');
    }).toThrow('[ERROR]');
  });
  it('재시도 시, 1또는2만 입력해야합니다', () => {
    expect(() => {
      Validator.validateRetry('3');
    }).toThrow('[ERROR]');
  });
});
