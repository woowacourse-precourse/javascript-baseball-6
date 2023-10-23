import { pickRandomNumber } from "./computer.js";

class App {
  async play() {
    pickRandomNumber();
  }
}

export default App;

const app = new App();
app.play();