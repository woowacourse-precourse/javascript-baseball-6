// const mission_utils = require("@woowacourse/mission-utils");
import { Console, Random } from "@woowacourse/mission-utils";
import Enemy from "./Enemy.js";
import Player from "./Player.js";
class App {
  constructor() {
    this.enemy = new Enemy();
    this.player = new Player();
  }

  setRandomNumber() {
    const computer = [];
    let num;
    while(computer.length !== 3) {
      num = Random.pickNumberInRange(1,9)
      if(!computer.includes(num)) computer.push(num);
    }
    return computer
  }

  async play() {
    Console.print("숫자야구 게임을 시작합니다.");
    while(true) {
      this.enemy.fill(this.setRandomNumber());
      break;
    }
  }
}
export default App;
