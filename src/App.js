class App {
  constructor() {
    this.userNum = "";
    this.answer = [];
    this.continueGame = true;
  }

  init() {
    this.userNum = "";
    this.answer = [];
    this.continueGame = true;
  }

  async play() {}
}

const game = new App();
game.play();

export default App;
