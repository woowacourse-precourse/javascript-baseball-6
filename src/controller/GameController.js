import { GAME_TERMS } from '../constants/gameTerms';
import { SYMBOLS } from '../constants/symbols';
import { Computer } from '../model';
import { BaseballValidator, ExitGameCommandValidator } from '../validator';
import { InputView, OutputView } from '../views';

class GameController {
  #computer;

  #inputView;

  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    this.#computer = null;
  }

  #askPrintStartGame() {
    this.#outputView.printStartGame();
  }

  #askPrintCompareResult({ strike, ball }) {
    this.#outputView.printCompareResult({ strike, ball });
  }

  #askPrintExitGame() {
    this.#outputView.printExitGame();
  }

  #initGameSetting() {
    this.#computer = new Computer();
  }

  async #inputPlayerBaseball() {
    const inputPlayerBaseball = await this.#inputView.readPlayerBaseball();
    return inputPlayerBaseball;
  }

  async #inputExitGameCommand() {
    const inputExitGameCommand = await this.#inputView.readExitGameCommand();
    return inputExitGameCommand;
  }

  async #askPlayerBaseball() {
    const inputPlayerBaseball = await this.#inputPlayerBaseball();
    BaseballValidator.from(inputPlayerBaseball).validateBaseball();
    return inputPlayerBaseball.split(SYMBOLS.emptyString).map(Number);
  }

  async #askExitGameCommand() {
    const inputExitGameCommand = await this.#inputExitGameCommand();
    ExitGameCommandValidator.from(inputExitGameCommand).validateExitGameCommand();
    return Number(inputExitGameCommand);
  }

  #askCompareResult(playerBaseball) {
    return this.#computer.comparePlayerBaseball(playerBaseball);
  }

  async #processGame() {
    this.#askPrintStartGame();
    while (true) {
      const playerBaseball = await this.#askPlayerBaseball();
      const { strike, ball } = this.#askCompareResult(playerBaseball);
      this.#askPrintCompareResult({ strike, ball });
      if (strike === GAME_TERMS.baseball.digit) break;
    }
    this.#askPrintExitGame();
  }

  async #restartGame() {
    await this.run();
  }

  async #processExitGameCommand() {
    const userCommand = await this.#askExitGameCommand();
    if (userCommand === GAME_TERMS.exitGameCommand.restart) {
      await this.#restartGame();
    }
  }

  async run() {
    this.#initGameSetting();
    await this.#processGame();
    await this.#processExitGameCommand();
  }
}

export default GameController;
