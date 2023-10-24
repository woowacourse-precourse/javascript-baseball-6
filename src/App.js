import * as MissionUtils from "@woowacourse/mission-utils";
import { View } from "./View";
import { BaseballGame } from "./BaseballGame";
import { BASEBALL_NUMBER, GAME_RESULT } from "./constants";
import { MESSAGE } from "./message";

class App {
  #game;
  #view = View;

  constructor() {
    MissionUtils.Console.print(MESSAGE.START_GAME);
  }

  async play() {
    this.#game = new BaseballGame();
    await this.#guessNum();
  }

  async #guessNum() {
    const userNum = await this.#view.readUserNum();
    const { strike, ball } = this.#game.compareNum(userNum);

    this.#view.printGameHint({ strike, ball });

    if (strike !== BASEBALL_NUMBER.THREE_STRIKE) return this.#guessNum();

    MissionUtils.Console.print(GAME_RESULT.WIN(strike));
    this.#chooseRestart();
  }

  async #chooseRestart() {
    const restart = await this.#view.chooseRestart();

    if (restart) return this.play();
  }
}

export default App;

const app = new App();
app.play();
