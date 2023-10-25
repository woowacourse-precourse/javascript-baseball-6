import Game from './Game.js';
import GameUI from './GameUI.js';
import { EXIT_COMMAND, CONSOLE_MESSAGE } from '../Constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Validation from '../validation.js';

class GameManager {
  constructor() {
    this.game = new Game();
    this.gameUi = new GameUI(this.game);
  }
  async startGame() {
    this.game.generateRandomNumber();
    await this.gameUi.askNumber();
    await this.handleRestartExit();
  }
  //게임 시작 메소드 
  async restartManger(exitNumber) {
    if (exitNumber === EXIT_COMMAND.RESTART) {
      this.game.computerNumber.length = 0;
      await this.startGame();
    }
  }
  // 게임 종료 메소드
  exitManager(exitNumber) {
    if (exitNumber === EXIT_COMMAND.END) {
      MissionUtils.Console.print(CONSOLE_MESSAGE.END);
    }
  }
  // 재시작 or 종료 관리
  async handleRestartExit() {
    const exitNumber = await this.gameUi.askExitNumber();
    Validation.verifyExitNumber(exitNumber);
    await this.restartManger(exitNumber);
    this.exitManager(exitNumber);
  }
}

export default GameManager;
