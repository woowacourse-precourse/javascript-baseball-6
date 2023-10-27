import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./features/Computer.js";
import { player } from "./features/Player.js";
import { COMPUTER_MESSAGE } from "./constants.js";

class App {
  constructor() {
    Console.print(COMPUTER_MESSAGE.START);
  }

  async play() {
    const computer = new Computer();
    computer.makeAnswer();
    const completed = await computer.compareAnswer();

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
