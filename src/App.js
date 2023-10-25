import { Computer } from "./features/Computer.js";
import { player } from "./features/Player.js";

class App {
  async play() {
    const computer = new Computer();
    computer.printStart();
    computer.makeAnswer();
    const completed = await computer.compareAnswerRepeatedly();

    if (completed) {
      const replay = await player.selectReplayOrExit();

      if (replay) {
        this.play();
        return;
      }
    }
  }
}

const app = new App();
app.play();

export default App;
