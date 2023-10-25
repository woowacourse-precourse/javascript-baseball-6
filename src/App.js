import InitialStage from "./InitialStage.js";
import PlayStage from "./PlayStage.js";
import EndStage from "./EndStage.js";

class App {
  async play() {
    const INITIAL_STAGE = new InitialStage();
    INITIAL_STAGE.messagePrint();

    const PLAY_STAGE = new PlayStage(INITIAL_STAGE.generateNumbers());
    await PLAY_STAGE.run();

    const END_STAGE = new EndStage();
    if (await END_STAGE.restart()) {
        await this.play();
    }
  }
}

export default App;
