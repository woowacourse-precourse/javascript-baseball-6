import { GAME_TERMS } from '../constants/gameTerms';
import AppError from '../errors/AppError';
import CommonValidator from './CommonValidator';

/**
 * '게임 종료 명령어 유효성 검사'의 역할을 수행
 */
class ExitGameCommandValidator {
  /**
   * @private
   * @type {number}
   */
  #exitGameCommand;

  /**
   * @private
   * @type {CommonValidator}
   */
  #commonValidator;

  constructor(exitGameCommand) {
    this.#commonValidator = new CommonValidator(exitGameCommand);
    this.#exitGameCommand = Number(exitGameCommand);
  }

  /**
   * ExitGameCommandValidator 클래스의 정적 팩토리 메서드
   * @static
   * @param {string} exitGameCommand - 유효성 검사를 수행할 게임 종료 명령어
   * @returns {ExitGameCommandValidator} ExitGameCommandValidator의 인스턴스
   */
  static from(exitGameCommand) {
    return new ExitGameCommandValidator(exitGameCommand);
  }

  /**
   * @static
   * @public
   * @constant
   * @type {import('../utils/jsDoc.js').ExitGameValidationTypes}
   */
  static VALIDATION_TYPES = Object.freeze({
    availableGameCommand: Object.freeze({
      errorMessage: `게임 종료 명령어는 ${GAME_TERMS.exitGameCommand.restart}번 또는 ${GAME_TERMS.exitGameCommand.exit}번만 가능합니다.`,
      isValid(exitGameCommand) {
        const { restart, exit } = GAME_TERMS.exitGameCommand;
        return exitGameCommand === restart || exitGameCommand === exit;
      },
    }),
  });

  /**
   * @public
   * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
   * @returns {void}
   */
  validateExitGameCommand() {
    this.#commonValidator.validate();
    Object.values(ExitGameCommandValidator.VALIDATION_TYPES).forEach(
      ({ errorMessage, isValid }) => {
        if (!isValid(this.#exitGameCommand)) throw new AppError(errorMessage);
      },
    );
  }
}

export default ExitGameCommandValidator;
