import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./features/Computer.js";
import { player } from "./features/Player.js";
import { MESSAGE } from "./constants/messages.js";

class App {
  async play() {
    Console.print(MESSAGE.GAME.START);
    const computer = new Computer();
    computer.makeAnswer();
    const completed = await computer.compareAnswerRepeatedly();

    if (completed) {
      const replay = await player.selectReplayOrExit();

      if (replay) {
        this.play();
        return;
      }
      Console.print(MESSAGE.GAME.END);
    }
  }
}

const app = new App();
app.play();

export default App;
