import Controller from "./controller/Controller.js";
import View from "./view/View.js";
import { Console } from '@woowacourse/mission-utils';

class App {

  constructor() {
    this.view = new View();
    this.view.showInitialMessage();
  }

  async play() {
    //Controller.js 메서드 호출
  }


}

export default App;

const app = new App();
app.play();