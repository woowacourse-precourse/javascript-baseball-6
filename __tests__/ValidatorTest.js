import Validator from '../src/utils/Validator';

describe('Validator', () => {
  test('사용자 입력 유효성 검사', () => {
    // 중간 공백 확인
    expect(() => Validator.validateNumber('1 43')).toThrow();

    // 숫자 이외의 문자 입력 확인
    expect(() => Validator.validateNumber('-123')).toThrow();
    expect(() => Validator.validateNumber('abc')).toThrow();
    expect(() => Validator.validateNumber('#@!')).toThrow();
    expect(() => Validator.validateNumber('가나다')).toThrow();

    // 숫자 길이 확인
    expect(() => Validator.validateNumber('1234')).toThrow();

    // 0 포함 확인
    expect(() => Validator.validateNumber('012')).toThrow();

    // 중복 숫자 확인
    expect(() => Validator.validateNumber('112')).toThrow();

    // 재시작(1) 또는 종료(2) 커맨드 확인
    expect(() => Validator.validateCommand('3')).toThrow();
    expect(() => Validator.validateCommand('a')).toThrow();
    expect(() => Validator.validateCommand(' ')).toThrow();
  });
});
