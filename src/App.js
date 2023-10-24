import { gameStart } from "./BaseballGame";

class App {
  async play() {
    try {
      await gameStart();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
