import { MissionUtils } from "@woowacourse/mission-utils";
import Controller from "./Controller";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const controller = new Controller();
    await controller.restart();
  }
}

export default App;

const app = new App();
app.play();
