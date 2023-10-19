import { MissionUtils } from "@woowacourse/mission-utils";
import gamePlay from "./gamePlay.js";

class App {
  async play() {
    await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    gamePlay();
  }
}

const app = new App();
app.play();

export default App;
