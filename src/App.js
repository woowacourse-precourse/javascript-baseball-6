import BaseballGameController from './controller/BaseballGameController.js';

class App {
  async play() {
    new BaseballGameController().start();
  }
}

export default App;
