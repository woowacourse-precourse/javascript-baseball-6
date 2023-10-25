import { Console } from "@woowacourse/mission-utils";
import { startGame } from './components/Game';

class App {
  async play() {
    await startGame();
    Console.close();
  }
}

const app = new App();
app.play();