const OptionValidation = require('../src/retry/validation/OptionValidation');

describe('게임 진행 옵션 검증 테스트', () => {
  test('옵션은 1 혹은 2를 입력할 수 있다.', () => {
    expect(() => {
      OptionValidation.validateOption('3');
    }).toThrow();
  });
});