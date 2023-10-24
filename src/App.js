import View from './View.js';
import Controller from './Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
    this.view = new View();
  }

  async play() {
    try {
      await this.controller.game();
    } catch (error) {
      this.view.infoPrint(error.message);
      throw error;
    }
  }
}

export default App;

const app = new App();
app.play();
