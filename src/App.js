import Controller from './Controller/Controller.js';

class App {
  async play() {
    this.controller = new Controller();
    await this.controller.start();
  }
}

const app = new App();
app.play();

export default App;
