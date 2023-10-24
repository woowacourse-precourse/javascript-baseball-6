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

  validLen(str) {
    if(str.length !== 3) throw new Error("[ERROR]");
  }

  chkIsOver(gameResult) {
    if(gameResult[2]=== 3) return {resultStr: "낫싱", isOver: false};
    let resultStr = "";
    if(gameResult[1]) resultStr += `${gameResult[1]}볼 `;
    if(gameResult[0]) resultStr +=  `${gameResult[0]}스트라이크`;
    return {resultStr, isOver: gameResult[0] === 3 };
  }

  async getUserInput() {
    let input;
    while(true) {
      input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.validLen(input);
      this.player.fill(input);
      const gameResult = this.enemy.compare(this.player.get());
      const {resultStr, isOver} = this.chkIsOver(gameResult);
      Console.print(resultStr);
      if(isOver) break;
    }
  }

  async play() {
    Console.print("숫자야구 게임을 시작합니다.");
    while(true) {
      this.enemy.fill(this.setRandomNumber());
      await this.getUserInput();
      break;
    }
  }
}
export default App;
