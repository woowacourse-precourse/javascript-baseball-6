class App {
  #isStart;
  async play() {
    this.#isStart = true;
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
