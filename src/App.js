import BaseballGameController from './controller/BaseballGameController.js';

class App {
  async play() {
    await new BaseballGameController().start();
  }
}

export default App;
