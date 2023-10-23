import * as MissionUtils from "@woowacourse/mission-utils";
import RandomStart from "../src/components/RandomStart.js";

class App {
  async play() {
    const computerNumbers = RandomStart(); // RandomStart 함수 사용
    console.log(computerNumbers);
  }
}

export default App;

const app = new App();
app.play();
