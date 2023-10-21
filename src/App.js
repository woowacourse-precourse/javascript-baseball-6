import { Console } from "@woowacourse/mission-utils";
import randomNumSet from "./util/randomNumSet.js";
import userResultCheck from "./util/userResultCheck.js";
import pirntResult from "./util/printResult.js";
import restartCheck from "./util/restartCheck.js";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    var gaming = true;
    while (gaming) {
      var correctCheck = true;
      const computer = randomNumSet(3);
      while (correctCheck) {
        const resultCount = await userResultCheck(computer, 3);
        correctCheck = await pirntResult(resultCount, correctCheck);
      }
      gaming = await restartCheck(gaming);
    }
  }
}
//const app = new App();
//app.play();

export default App;
