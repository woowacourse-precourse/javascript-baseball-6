import { Console } from "@woowacourse/mission-utils";
import gameStart from "./game";
import { GAME } from "./text";

class App {
  async play() {
    Console.print(GAME.START);
    await gameStart();
  }
}

export default App;
