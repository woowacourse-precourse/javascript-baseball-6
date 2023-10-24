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
    while(true) {
      this.enemy.fill(setRandomNumber());
      await getUserInput(this.enemy, this.player);
      if(await restart()) break;
    }
    Console.print("게임 종료");
  }
}

const setRandomNumber =()  =>{
  const computer = [];
  let num;
  while(computer.length !== 3) {
    num = Random.pickNumberInRange(1,9)
    if(!computer.includes(num)) computer.push(num);
  }
  return computer
}

const validLen = (str) => {
  if(str.length !== 3) throw new Error("[ERROR]");
}

const chkIsOver = (gameResult) => {
  if(gameResult[2]=== 3) return {resultStr: "낫싱", isOver: false};
  let resultStr = "";
  if(gameResult[1]) resultStr += `${gameResult[1]}볼 `;
  if(gameResult[0]) resultStr +=  `${gameResult[0]}스트라이크`;
  return {resultStr, isOver: gameResult[0] === 3 };
}

const getUserInput = async(enemy, player) => {
  let input;
  while(true) {
    input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    validLen(input);
    player.fill(input);
    const gameResult = enemy.compare(player.get());
    const {resultStr, isOver} = chkIsOver(gameResult);
    Console.print(resultStr);
    if(isOver) break;
  }
  return;
}

const restart = async()=> {
  const cmd = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  return cmd === "2";
}
export default App;
