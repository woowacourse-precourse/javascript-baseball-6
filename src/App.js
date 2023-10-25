// const mission_utils = require("@woowacourse/mission-utils");
import { Console } from "@woowacourse/mission-utils";
import Enemy from "./Enemy.js";
import Player from "./Player.js";
class App {
  constructor() {
    this.enemy = new Enemy();
    this.player = new Player();
  }


  async getUserInput(){
    let input;
    while(true) {
      input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const playerNums = input.split("").map(v=> this.validNaturalNumber(v))
      this.validLen(playerNums);
      this.player.fill(input);
      const gameResult = this.enemy.compare(this.player.get());
      const {resultStr, isOver} = this.chkIsOver(gameResult);
      Console.print(resultStr);
      if(isOver) break;
    }
    return;
  }

  validLen(str) {
    if(str.length !== 3) throw new Error("[ERROR]");
  }

  validNaturalNumber(str) {
    if(! (/[0-9]/g.test(str))) throw new Error("[ERROR]");
    return parseInt(str);
  }

  chkIsOver(gameResult) {
    if(gameResult[2]=== 3) return {resultStr: "낫싱", isOver: false};
    let resultStr = "";
    if(gameResult[1]) resultStr += `${gameResult[1]}볼 `;
    if(gameResult[0]) resultStr +=  `${gameResult[0]}스트라이크`;
    return {resultStr, isOver: gameResult[0] === 3 };
  }
  
  restart = async()=> {
    const cmd = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    return cmd === "2";
  }

  async play() {
    Console.print("숫자야구 게임을 시작합니다.");
    while(true) {
      this.enemy.setRandomNumber();
      await this.getUserInput();
      if(await this.restart()) break;
    }
    Console.print("게임 종료");
  }
}
export default App;
