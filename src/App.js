import { Computer } from './model';
import { InputView } from './views';

class App {
  #computer;

  #inputView;

  constructor() {
    this.#inputView = InputView;
  }

  #initGameSetting() {
    this.#computer = new Computer();
  }

  async play() {
    this.#initGameSetting();
  }
}

const app = new App();
app.play();

export default App;
