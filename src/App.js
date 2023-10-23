// const mission_utils = require("@woowacourse/mission-utils");
import { Console, Random } from "@woowacourse/mission-utils";
import Enemy from "./Enemy.js";
import Player from "./Player.js";
class App {
  constructor() {
    this.enemy = new Enemy();
    this.player = new Player();
  }
  async play() {
    Console.print("숫자야구 게임을 시작합니다.");
  }
}
export default App;
