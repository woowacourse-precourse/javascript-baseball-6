import Game from "./Game";

class App {
  async play() {
    try {
      const game = new Game();
      await game.start();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
