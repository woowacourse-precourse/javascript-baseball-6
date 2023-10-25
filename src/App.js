import Controller from './Controller/Controller.js';

class App {
  async play() {
    const controller = new Controller();
    await controller.start();
  }
}

const app = new App();
app.play();

export default App;
