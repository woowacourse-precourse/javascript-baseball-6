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

  async play() {
    this.#initGameSetting();
    this.#askPrintStartGame();
    const baseball = await this.#askPlayerBaseball();
  }
}

const app = new App();
app.play();

export default App;
