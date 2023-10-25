import AppError from '../../src/errors/AppError.js';
import { CommonValidator } from '../../src/validator/index.js';

describe('CommonValidator 테스트', () => {
  describe('예외 테스트', () => {
    test.each([
      {
        inputValue: '',
        expectedErrorMessage: CommonValidator.VALIDATION_TYPES.emptyValues.errorMessage,
      },
      {
        inputValue: 'Some text with space',
        expectedErrorMessage: CommonValidator.VALIDATION_TYPES.existSpaces.errorMessage,
      },
    ])(
      '입력값이 "$inputValue"일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ inputValue, expectedErrorMessage }) => {
        // given
        const validator = new CommonValidator(inputValue);
        // when
        const startValidation = () => validator.validate();
        // then
        expect(startValidation).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        inputValue: 'abc',
      },
      {
        inputValue: '123',
      },
    ])('입력값이 "$inputValue"일 때 에러가 발생하지 않는다.', ({ inputValue }) => {
      // given
      const validator = new CommonValidator(inputValue);
      // when
      const startValidation = () => validator.validate();
      // then
      expect(startValidation).not.toThrow();
    });
  });
});
