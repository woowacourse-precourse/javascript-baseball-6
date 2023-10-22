import gameLoop from './game/gameLoop.js';
import {MissionUtils} from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from './utils/message.js';

class App {
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      await gameLoop();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
  
}


export default App;