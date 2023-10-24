import * as MissionUtils from "@woowacourse/mission-utils";
import { View } from "./View";
import { BaseballGame } from "./BaseballGame";

class App {
  game;
  view = View;

  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  async play() {
    this.game = new BaseballGame();
    await this.guessNum();
  }

  async guessNum() {
    const userNum = await this.view.readUserNum();
    const { strike, ball } = this.game.compareNum(userNum);

    this.printHint({ strike, ball });

    if (strike !== 3) return this.guessNum();

    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.chooseRestart();
  }

  printHint({ strike, ball }) {
    this.view.printGameHint({ strike, ball });
  }

  async chooseRestart() {
    const restart = await this.view.chooseRestart();

    if (restart) return this.play();
  }
}

export default App;

const app = new App();
app.play();
