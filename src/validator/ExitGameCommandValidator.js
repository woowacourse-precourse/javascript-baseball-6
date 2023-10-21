import { GAME_TERMS } from '../constants/gameTerms';
import AppError from '../errors/AppError';
import CommonValidator from './CommonValidator';

/**
 * '게임 종료 명령어 유효성 검사'의 역할을 수행
 */
class ExitGameCommandValidator {
  /**
   * 유효성 검사를 수행할 게임 종료 명령어
   * @private
   * @type {number}
   */
  #exitGameCommand;

  /**
   * 일반적인 검사를 수행할 Validator
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
   * 게임 종료 명령어 검사 유형에 대한 에러 메시지와 유효성 검사 함수를 정의한 객체
   * @static
   * @type {Object}
   * @property {Object} availableGameCommand - 게임 종료 명령어가 유효한 값인지 검사하기 위한 객체
   */
  static validationTypes = Object.freeze({
    availableGameCommand: Object.freeze({
      errorMessage: `게임 종료 명령어는 ${GAME_TERMS.exitGameCommand.restart}번 또는 ${GAME_TERMS.exitGameCommand.exit}번만 가능합니다.`,
      isValid(exitGameCommand) {
        const { restart, exit } = GAME_TERMS.exitGameCommand;
        return exitGameCommand === restart || exitGameCommand === exit;
      },
    }),
  });

  /**
   * 제공된 게임 종료 명령어에 대해 유효성 검사를 수행하는 메서드
   * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
   * @returns {void}
   */
  validateExitGameCommand() {
    this.#commonValidator.validate();
    Object.values(ExitGameCommandValidator.validationTypes).forEach(({ errorMessage, isValid }) => {
      if (!isValid(this.#exitGameCommand)) throw new AppError(errorMessage);
    });
  }
}

export default ExitGameCommandValidator;
