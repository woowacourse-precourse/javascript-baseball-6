import Game from './Game.js';
import GameUI from './GameUI.js';
import { EXIT_COMMAND, CONSOLE_MESSAGE } from '../Constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class GameManager {
  constructor() {
    this.game = new Game();
    this.gameUi = new GameUI(this.game);
  }
  // 전체적인 게임 로직
  async playGame() {
    this.game.generateRandomNumber();
    await this.startManager();
    await this.handleRestartExit();
  }
  // 게임 처음 시작(유저에게 숫자 입력 받기)
  async startManager() {
    const GUESS_NUMBER = await this.gameUi.askGuessNumber();
    await this.playManager(GUESS_NUMBER);
  }
  // 게임의 전체적인 진행 관여 메소드(유저의 입력값과 상대 입력값 대조)
  async playManager(GUESS_NUMBER) {
    const { strikeNumbers, ballNumbers } =
      this.game.countBallandStrike(GUESS_NUMBER);
    this.gameUi.showResults(strikeNumbers, ballNumbers);
    if (strikeNumbers === 3) {
      this.gameUi.threeStrike();
      return;
    }
    await this.startManager();
  }

  // 게임 재시작 메소드
  async restartManger(exitNumber) {
    if (exitNumber === EXIT_COMMAND.RESTART) {
      this.game.computerNumber.length = 0;
      await this.playGame();
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
    await this.restartManger(exitNumber);
    this.exitManager(exitNumber);
  }
}

export default GameManager;
