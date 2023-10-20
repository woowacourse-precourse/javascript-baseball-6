import { GAME_TERMS } from './constants/gameTerms';
import { SYMBOLS } from './constants/symbols';
import { Computer } from './model';
import { BaseballValidator } from './validator';
import { InputView, OutputView } from './views';

class App {
  #computer;

  #inputView;

  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
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

  async #askPlayerBaseball() {
    const inputPlayerBaseball = await this.#inputPlayerBaseball();
    BaseballValidator.from(inputPlayerBaseball).validateBaseball();
    return inputPlayerBaseball.split(SYMBOLS.emptyString).map(Number);
  }

  #askCompareResult(playerBaseball) {
    return this.#computer.comparePlayerBaseball(playerBaseball);
  }

  async #processGame() {
    while (true) {
      const playerBaseball = await this.#askPlayerBaseball();
      const { strike, ball } = this.#askCompareResult(playerBaseball);
      this.#askPrintCompareResult({ strike, ball });
      if (strike === GAME_TERMS.baseball.digit) break;
    }
  }

  async play() {
    this.#initGameSetting();
    this.#askPrintStartGame();
    await this.#processGame();
    this.#askPrintExitGame();
  }
}

const app = new App();
app.play();

export default App;
