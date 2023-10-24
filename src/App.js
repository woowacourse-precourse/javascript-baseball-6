import BaseballGame from './BaseballGame.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { DEFAULT, ERROR, LOG } from './util/constants.js';


class App {

  game = null; //BaseballGame 인스턴스
  state = false; //게임 진행 상태

  async play() {
    try {
      this.state = true;
      this.game = new BaseballGame();
      const baseballGame = this.game;
      let player = [];

      while (this.state) {
        MissionUtils.Console.print(LOG.START);
        baseballGame.initGame(); //초기화

        player = await baseballGame.getPlayerInput();
        const { ball, strike } = baseballGame.findStrikes(player);
        baseballGame.printScore(ball, strike);

        if (strike !== DEFAULT.MAX_LENGTH) continue; //3스트라이크가 아닐 경우 계속해서 게임 진행

        MissionUtils.Console.print(LOG.CORRECT);
        await this.gameControl();
      }
    } catch (err) {
      this.end();
      throw new Error(`[ERROR] ${err}`);
    }
  }


  /* 게임 재시작(1) or 종료(2) 여부 */
  async gameControl() {
    const input = await MissionUtils.Console.readLineAsync(LOG.CONTROL);
    const control = Number(input.trim());

    if (control !== DEFAULT.RESTART || control !== DEFAULT.END)
      throw new Error(ERROR.NOT_GAME_CONTROL);

    switch (control) {
      case 1:
        this.replay();
        break;
      case 2:
        this.end();
        break;
    }
  }


  /* 게임 재시작  */
  replay() {
    this.state = true;
    this.game.initGame();
  }


  /* 게임 종료 */
  end() {
    this.state = false;
    this.game = null;
  }

}

export default App;
