import BaseballGameController from './controller/BaseballGameController.js';

class App {
  async play() {
    return new BaseballGameController().start();
  }
}

export default App;
