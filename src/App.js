import { MainGame } from "./MainGame.js";
import { Console } from "@woowacourse/mission-utils";
import { Messages } from "./Messages.js";

class App {
  async play() {
    Console.print(Messages.START);

    const game = new MainGame();
    return game.getResult();
  }
}
const app = new App();
app.play();
export default App;
