import { Console } from "@woowacourse/mission-utils";
import game from "./game";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await game();
  }
}

const app = new App();
app.play();

export default App;
