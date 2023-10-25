import { Console } from "@woowacourse/mission-utils";
import gameStart from "./game";
import { GAME } from "./text";

class App {
  async play() {
    Console.print(GAME.START);
    await gameStart();
  }
}

const app = new App();
app.play();

export default App;
