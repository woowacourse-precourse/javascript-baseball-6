import Controller from "./controller/Controller.js";

class App {
  async play() {
    this.controller = new Controller(true);
    await this.controller.init();
  }
}

export default App;
