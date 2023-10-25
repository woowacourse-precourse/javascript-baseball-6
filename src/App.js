import { Console } from "@woowacourse/mission-utils";
import { playGame } from "./game/Play.js"

class App {

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    playGame();
  }
}

const app = new App();
app.play();

export default App;