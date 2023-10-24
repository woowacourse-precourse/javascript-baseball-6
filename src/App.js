import * as MissionUtils from "@woowacourse/mission-utils";
import RandomStart from "../src/components/RandomStart.js";
import InputNumber from "../src/components/InputNumber.js";
import CheckResult from "./components/CheckResult.js";

class App {
  async play() {
    const computerNumbers = RandomStart(); // RandomStart 함수 사용
    console.log(computerNumbers);
    const userNumbers = await InputNumber();
    console.log(userNumbers);
    const data = CheckResult(userNumbers, computerNumbers);
    console.log(data.ball);
  }
}

export default App;

const app = new App();
app.play();
