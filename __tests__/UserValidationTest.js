const UserValidation = require('../src/retry/validation/UserValidation');

describe('사용자 입력값 검증 테스트', () => {
  test.each(['104', '12', '1234', '119'])('입력값은 1 - 9  사이의 자연수로 이루어진 서로 다른 3개의 숫자이다.', (userNumber) => {
    expect(() => {
      UserValidation.validateUser(userNumber);
    }).toThrow();
  });
});