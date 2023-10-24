import BaseballGameController from './Controllers/BaseballGameController.js';

class App {
  async play() {
    const baseballGameController = new BaseballGameController();
    await baseballGameController.play();
  }
}

export default App;
