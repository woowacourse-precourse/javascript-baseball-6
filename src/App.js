import { MissionUtils } from "@woowacourse/mission-utils";
import result from "./game/result.js";
import playGame from "./game/playGame.js";

export class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await playGame();
  }
}
export default App;
