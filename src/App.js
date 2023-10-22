import { BaseballView } from './view/BaseballView.js';
import { BaseballModel } from './model/BaseballModel.js';
import { BaseballController } from './controller/BaseballController.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      const view = new BaseballView();
      const model = new BaseballModel();
      const controller = new BaseballController(model, view);
      controller.start();
    } catch (err) {
      Console.print(err);
    }
  }
}

const app = new App();
app.play();

export default App;
