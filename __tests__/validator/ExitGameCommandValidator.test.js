import AppError from '../../src/errors/AppError';
import { ExitGameCommandValidator } from '../../src/validator';
import { GAME_TERMS } from '../../src/constants/gameTerms';

describe('ExitGameCommandValidator 테스트', () => {
  describe('예외 테스트', () => {
    test.each([
      {
        exitGameCommand: '3',
        expectedErrorMessage:
          ExitGameCommandValidator.validationTypes.availableGameCommand.errorMessage,
      },
      {
        exitGameCommand: 'a',
        expectedErrorMessage:
          ExitGameCommandValidator.validationTypes.availableGameCommand.errorMessage,
      },
    ])(
      '입력된 종료 명령어가 "$exitGameCommand"일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ exitGameCommand, expectedErrorMessage }) => {
        // given
        const validator = ExitGameCommandValidator.from(exitGameCommand);
        // when
        const startValidation = () => validator.validateExitGameCommand();
        // then
        expect(startValidation).toThrow(new AppError(expectedErrorMessage));
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        exitGameCommand: `${GAME_TERMS.exitGameCommand.restart}`,
      },
      {
        exitGameCommand: `${GAME_TERMS.exitGameCommand.exit}`,
      },
    ])(
      '입력된 종료 명령어가 "$exitGameCommand"일 때 에러가 발생하지 않아야 한다.',
      ({ exitGameCommand }) => {
        // given
        const validator = ExitGameCommandValidator.from(exitGameCommand);
        // when
        const startValidation = () => validator.validateExitGameCommand();
        // then
        expect(startValidation).not.toThrow();
      },
    );
  });
});
