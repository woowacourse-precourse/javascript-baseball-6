import ComputerNumber from './ComputerNumber.js';

class App {
  #isStart;
  #computerNumber;
  async play() {
    this.#isStart = true;
    this.#computerNumber = ComputerNumber.generateComputerNumber();
    this.#render();
  }

  #render() {
    this.#isStart ? this.#start() : this.#finish();
  }

  #setIsStart(newState) {
    this.#isStart = newState;
    this.#render();
  }

  #start() {}

  #finish() {}
}

const app = new App();
app.play();
export default App;
