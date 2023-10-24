import { Console, Random } from "@woowacourse/mission-utils";
import MSG from "./consts/msg.js";
import BaseBallGame from "./BaseBallGame.js";

const { GAME } = MSG;
const { GAME_START } = GAME;

class App {
  inputValue;
  computerNum;

  constructor() {
    this.game = new BaseBallGame();
  }

  async play() {
    Console.print(GAME_START);
    this.createRandomNum();
    await this.gameStart();
  }

  createRandomNum() {
    this.computerNum = [];
    while (this.computerNum.length < 3) {
      const randomNum = Random.pickNumberInRange(1, 9); // 랜덤 숫자를 돌린다.
      const isInclude = this.computerNum.includes(randomNum); // 중복 숫자가 있으면 true, 없으면 false 를 반환한다.

      if (!isInclude) {
        this.computerNum.push(randomNum);
      }
    }
  }

  async gameStart() {
    //숫자 맞히기 시작 함수

    await this.game.getInputNum();
    this.game.calculateStrikeAndBall(this.computerNum);
    const strike = await this.game.printStrikeAndBall();

    if (strike !== 3) {
      await this.gameStart();
      return;
    }

    const isPlay = await this.game.selectPalyAgain();
    if (isPlay) this.play();
    return;
  }
}

const app = new App();
app.play();

export default App;
