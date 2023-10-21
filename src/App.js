import { BaseballView } from './view/BaseballView.js';
import { BaseballModel } from './model/BaseballModel.js';
import { BaseballController } from './controller/BaseballController.js';

class App {
  async play() {
    const view = new BaseballView();
    const model = new BaseballModel();
    const controller = new BaseballController(model, view);
    controller.start();
  }
}

const app = new App();
app.play();

export default App;
