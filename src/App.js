class App {
  constructor() {
    this.isPlaying = false;
    this.isCorrect = false;

    this.computer = [];
    this.user = [];

    this.status = {
      strike: 0,
      ball: 0,
      out: 0,
    };

    this.init();
  }

  init() {
    this.isPlaying = true;
    this.isCorrect = true;

    this.computer = [];
    this.user = [];

    this.clearStatus();
  }

  clearStatus() {
    this.status = {
      strike: 0,
      ball: 0,
      out: 0,
    };
  }

  async play() {}
}

export default App;
