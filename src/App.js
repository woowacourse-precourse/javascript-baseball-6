import { MissionUtils } from "@woowacourse/mission-utils";
import firstGameStart from "./1_game.js";

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await firstGameStart();
  }
}
const app = new App();
app.play();

export default App;