import BaseballGame from "./BaseballGame.js";

class App {
  async play() {
    try {
      const game = new BaseballGame({
        minNumber: 1,
        maxNumber: 9,
        numberLength: 3,
      });
      await game.start();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
