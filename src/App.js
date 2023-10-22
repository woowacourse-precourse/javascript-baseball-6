import BaseballController from './controller/baseballController.js';

class App {
  constructor() {
    this.controller = new BaseballController();
  }
  async play() {
    try {
      await this.controller.play();
    } catch (error) {
      throw error;
    }
  }
}
const app = new App();
app.play();
export default App;
