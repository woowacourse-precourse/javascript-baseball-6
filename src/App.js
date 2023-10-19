import { MissionUtils } from "@woowacourse/mission-utils";
import { getRandomNumber } from "./utils.js";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    console.log(getRandomNumber());
  }
}

const app = new App();
app.play();

export default App;
