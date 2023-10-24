import { MissionUtils } from "@woowacourse/mission-utils";
import { Console, Random } from "@woowacourse/mission-utils";
import init from "./init";

class App {
  async play() {
    try {
      Console.print("숫자 야구 게임을 시작합니다.");
      await init();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;
