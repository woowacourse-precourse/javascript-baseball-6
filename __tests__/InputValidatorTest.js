import InputValidator from '../src/utils/InputValidator';
import { VALIDATION_ERRORS } from '../src/constants/MessageConstants';

describe('InputValidator 클래스 검사', () => {
  describe('validateIsString 메소드 검사', () => {
    it('입력값이 문자열이 아닐 경우 오류를 던져야 한다', () => {
      expect(() => InputValidator.validateIsString(123)).toThrowError(VALIDATION_ERRORS.NOT_STRING);
    });
  });

  describe('validateIsThreeDigits 메소드 검사', () => {
    it('입력값이 세 자리 숫자가 아닐 경우 오류를 던져야 한다', () => {
      expect(() => InputValidator.validateIsThreeDigits('12')).toThrowError(
        VALIDATION_ERRORS.NOT_THREE_DIGITS
      );
    });
  });

  describe('validateNoDuplicateDigits 메소드 검사', () => {
    it('입력값에 중복된 숫자가 있을 경우 오류를 던져야 한다', () => {
      expect(() => InputValidator.validateNoDuplicateDigits('122')).toThrowError(
        VALIDATION_ERRORS.DUPLICATE_DIGITS
      );
    });
  });

  describe('validateInRange 메소드 검사', () => {
    it('입력값에 1-9 범위를 벗어난 숫자가 있을 경우 오류를 던져야 한다', () => {
      expect(() => InputValidator.validateInRange('120')).toThrowError(
        VALIDATION_ERRORS.OUT_OF_RANGE
      );
    });
  });

  describe('validateInput 메소드 검사', () => {
    it('모든 검증을 통과할 경우 오류를 던지지 않아야 한다', () => {
      expect(() => InputValidator.validateInput('123')).not.toThrow();
    });
  });

  describe('validateGameEndInput 메소드 검사', () => {
    it('"1" 또는 "2"가 아닌 값을 입력했을 경우 오류를 던져야 한다', () => {
      expect(() => InputValidator.validateGameEndInput('3')).toThrowError(
        VALIDATION_ERRORS.INVALID_END_INPUT
      );
      expect(() => InputValidator.validateGameEndInput('a')).toThrowError(
        VALIDATION_ERRORS.INVALID_END_INPUT
      );
    });
  });
});
