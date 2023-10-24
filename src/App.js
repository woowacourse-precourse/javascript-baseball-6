import { MissionUtils } from "@woowacourse/mission-utils";
import compareUserNum from "./compareUserNum.js";
import randomNum from "./randomNum.js";
import reStartGame from "./reStartGame.js";

class App {
  async play() {
    try {
      await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      const computerNum = await randomNum();
      await compareUserNum(computerNum);
      await reStartGame();
    } catch (error) {
      throw new Error("[ERROR] 게임 진행 중 오류가 발생했습니다:", error);
    }
  }
}

const runApp = new App();
runApp.play();

export { runApp };
export default App;
