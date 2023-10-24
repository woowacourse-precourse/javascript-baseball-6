import Controller from './Controller/Controller.js';

class App {
  async play() {
    const controller = await new Controller();
    await controller.mainGameController();
  }
}

//const app = new App();
// app.play();

export default App;
