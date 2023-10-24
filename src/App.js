import BaseballGameController from "./controller/BaseballGameController.js";

class App {
  async play() {
    const baseballGameController = new BaseballGameController();
    await baseballGameController.start();
  }
}

export default App;
