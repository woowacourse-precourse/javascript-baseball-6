import { GAME_TERMS } from '../constants/gameTerms';
import AppError from '../errors/AppError';
import CommonValidator from './CommonValidator';

class ExitGameCommandValidator {
  #exitGameCommand;

  #commonValidator;

  constructor(exitGameCommand) {
    this.#commonValidator = new CommonValidator(exitGameCommand);
    this.#exitGameCommand = Number(exitGameCommand);
  }

  static from(exitGameCommand) {
    return new ExitGameCommandValidator(exitGameCommand);
  }

  static validationTypes = Object.freeze({
    availableGameCommand: Object.freeze({
      errorMessage: `게임 종료 명령어는 ${GAME_TERMS.exitGameCommand.restart}번 또는 ${GAME_TERMS.exitGameCommand.exit}번만 가능합니다.`,
      isValid(exitGameCommand) {
        const { restart, exit } = GAME_TERMS.exitGameCommand;
        return exitGameCommand === restart || exitGameCommand === exit;
      },
    }),
  });

  validateExitGameCommand() {
    this.#commonValidator.validate();
    Object.values(ExitGameCommandValidator.validationTypes).forEach(({ errorMessage, isValid }) => {
      if (!isValid(this.#exitGameCommand)) throw new AppError(errorMessage);
    });
  }
}

export default ExitGameCommandValidator;
