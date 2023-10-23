import numberGameService from "./service/numberGameService.js";

class App {
  async play() {
    numberGameService();
  }
}

const app = new App();
app.play();

export default App;
