import { Console } from "@woowacourse/mission-utils";
import { startGame } from "./game/Play.js"

class App {

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    startGame();
  }
}

const app = new App();
app.play();

export default App;