import NumberBaseballGame from './NumberBaseballGame';

class App {
  async play() {
    const numberBaseballGame = new NumberBaseballGame(1, 9, 3);
    await numberBaseballGame.play();
  }
}

export default App;
