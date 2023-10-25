import BaseballModel from './Model/baseballModel.js';
import BaseballView from './View/baseballView.js';

class App {
  constructor() {
    this.model = new BaseballModel();
    this.printStartMessage();
  }

  printStartMessage() {
    BaseballView.displayMessage('숫자 야구 게임을 시작합니다.');
  }

  async play() {
  }

}

const app = new App();
app.play();

export default App;
