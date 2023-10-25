import { Console } from "@woowacourse/mission-utils";
import { GAME } from "./common/text";
import gameStart from "./modules/game";

class App {
  async play() {
    Console.print(GAME.START);
    await gameStart();
  }
}

export default App;
