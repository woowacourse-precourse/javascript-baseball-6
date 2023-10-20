import { Computer } from './model';

class App {
  #computer;

  constructor() {
    this.#computer = new Computer();
  }

  async play() {}
}

const app = new App();
app.play();

export default App;
