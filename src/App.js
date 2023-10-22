import { MissionUtils } from "@woowacourse/mission-utils";
import { INIT } from "./GameCode/game";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await INIT();
  }
}
const app = new App();
app.play();

export default App;
