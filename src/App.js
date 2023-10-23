import { Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";
class App {
  play() {
    const game = new Game();
    game.gameStart();
  }
}

const app = new App();

app.play();

export default App;
