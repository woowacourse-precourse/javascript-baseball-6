import AppError from '../../src/errors/AppError.js';
import { BaseballValidator } from '../../src/validator/index.js';

describe('BaseballValidator 테스트', () => {
  describe('예외 테스트', () => {
    test.each([
      {
        baseball: '12A',
        expectedErrorMessage: BaseballValidator.VALIDATION_TYPES.availableNumber.errorMessage,
      },
      {
        baseball: '1256',
        expectedErrorMessage: BaseballValidator.VALIDATION_TYPES.availableSize.errorMessage,
      },
      {
        baseball: '091',
        expectedErrorMessage: BaseballValidator.VALIDATION_TYPES.availableNumberRange.errorMessage,
      },
      {
        baseball: '112',
        expectedErrorMessage: BaseballValidator.VALIDATION_TYPES.existDuplicateNumber.errorMessage,
      },
    ])(
      'baseball이 "$baseball"일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ baseball, expectedErrorMessage }) => {
        // given
        const validator = new BaseballValidator(baseball);
        // when
        const startValidation = () => validator.validateBaseball();
        // then
        expect(startValidation).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        baseball: '123',
      },
      {
        baseball: '789',
      },
    ])('입력된 baseball 값이 "$baseball"일 때 에러가 발생하지 않아야 한다.', ({ baseball }) => {
      // given
      const validator = new BaseballValidator(baseball);
      // when
      const startValidation = () => validator.validateBaseball();
      // then
      expect(startValidation).not.toThrow();
    });
  });
});
