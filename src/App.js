import { Console } from "@woowacourse/mission-utils";
import randomNumSet from "./util/randomNumSet.js";
import userResultCheck from "./util/userResultCheck.js";
import resultCheck from "./util/printResult.js";
import restartCheck from "./util/restartCheck.js";

const NUMSIZE = 3;

class App {
  async play() {
    var gaming = true;
    while (gaming) {
      var correctCheck = true;
      const computer = randomNumSet(NUMSIZE);
      while (correctCheck) {
        const resultCount = await userResultCheck(computer, NUMSIZE);
        correctCheck = await resultCheck(resultCount);
      }
      gaming = await restartCheck();
    }
    return;
  }
}
export default App;
