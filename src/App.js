import { MissionUtils } from "@woowacourse/mission-utils";
import gameStart from "./game/start";
const { Console } = MissionUtils;

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    gameStart();
  }
}

export default App;

const app = new App();
app.play();
