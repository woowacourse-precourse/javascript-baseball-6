import { MissionUtils } from "@woowacourse/mission-utils";
import * as func from "./Functions.js";

class App {
  async play() {
    MissionUtils.Console.print(func.createRandomNumber());
  }
}

const app = new App();
app.play();

export default App;
