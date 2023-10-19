import BaseballGameController from "./Controller/BaseballGameController.js";

class App {
  async play() {
    const baseballGameController = new BaseballGameController();
    baseballGameController.baseballGameStart();
  }
}

const app = new App();
app.play();

export default App;
