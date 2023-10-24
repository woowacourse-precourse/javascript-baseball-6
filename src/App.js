import View from "./View.js";
import Model from "./Model.js";
import Controller from "./Controller.js";
import Error from "./Error.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const view = new View();
    const model = new Model();
    const controller = new Controller(model, view);
    controller.initGame();
    controller.opening();
    let isRestart = true;
    while (isRestart) {
      const correct = (await controller.handleInput()).isCorrect;
      if (correct) {
        isRestart = (await controller.ending()).isRestart;
        if (isRestart) {
          controller.initGame();
        }
      }
    }
    return this;
  }
}

// new App().play();

export default App;
