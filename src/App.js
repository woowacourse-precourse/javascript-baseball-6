import { BaseballView } from './view/BaseballView.js';
import { BaseballModel } from './model/BaseballModel.js';
import { BaseballController } from './controller/BaseballController.js';

class App {
  async play() {
    try {
      const view = new BaseballView();
      const model = new BaseballModel();
      const controller = new BaseballController(model, view);
      await controller.start();
    } catch (err) {
      throw new Error(err);
    }
  }
}

const app = new App();
app.play();

export default App;
