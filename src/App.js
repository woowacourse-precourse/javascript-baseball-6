import BaseballGameController from './controller/BaseballGameController';

class App {
  async play() {
    const baseballGameController = new BaseballGameController();
    await baseballGameController.play();
  }
}

export default App;
