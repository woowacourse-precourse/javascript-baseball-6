import gameProgress from "./gameProgress.js";
import { printStartSentence } from "./utils.js";

class App {
  async play() {
    printStartSentence();
    await gameProgress();
  }
}

export default App;
