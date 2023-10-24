class App {
  constructor() {
    this.balls = new Balls();
    this.view = new GameView();
  }

  async play() {
    this.view.printStartGame();
    while (true) {}
  }
}

export default App;
const app = new App();
app.play();
