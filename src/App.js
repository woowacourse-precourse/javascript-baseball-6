import { MissionUtils } from "@woowacourse/mission-utils";
import result from "./game/result.js";
import playGame from "./game/playGame.js";
import { TEXT } from './comm/text.js';

export class App {
  async play() {
    MissionUtils.Console.print(`${TEXT.GAEM_START}`);
    await playGame();
  }
}
export default App;
