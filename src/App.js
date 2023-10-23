import { MissionUtils } from "@woowacourse/mission-utils";
import start from "./Play/PlayGame.js";

class App {
  async play() {
    await start();
  }
}


export default App;
