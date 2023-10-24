import View from "./View.js";
import Model from "./Model.js";
import Controller from "./Controller.js";
import Error from "./Error.js";

class App {
  async play() {
    const view = new View();
    const model = new Model();
    const controller = new Controller(model, view);
    controller.initGame();
    controller.opening();
    let isRestart = true;
    while (isRestart) {
      let correct = false;
      try {
        correct = (await controller.handleInput()).isCorrect;
      } catch (e) {
        Error.handle(e);
        throw e;
      }
      if (correct) {
        isRestart = false;
      }
    }
    return this;
  }
}

export default App;
