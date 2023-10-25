import Game from './Game.js';
import GameUI from './GameUI.js';
import { EXIT_COMMAND, CONSOLE_MESSAGE, ERROR_MESSAGE } from '../Constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class GameManager {
  constructor() {
    this.game = new Game();
    this.gameUi = new GameUI(this.game);
  }
  async startGame() {
    this.game.generateRandomNumber();
    await this.gameUi.askNumber();
    await this.exitManager();
  }

  // 유저의 입력값에 따라 재시작 or 종료
  async exitManager() {
    const exitNumber = await this.gameUi.askExitNumber();
    if (exitNumber === EXIT_COMMAND.RESTART) {
      this.game.computerNumber.length = 0;
      await this.startGame();
      return;
    } else if (exitNumber === EXIT_COMMAND.END) {
      MissionUtils.Console.print(CONSOLE_MESSAGE.END);
      return;
    }
    throw new Error(ERROR_MESSAGE);
  }
}

export default GameManager;
