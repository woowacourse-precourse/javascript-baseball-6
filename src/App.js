import { pickRandomNumber } from "./computer.js";

class App {
  async play() {
    await pickRandomNumber();
  }
}

export default App;

const app = new App();
app.play();