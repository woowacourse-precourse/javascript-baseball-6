import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from './computer.js';

const GameStatus = Object.freeze({
  ongoing: '1',
  over: '2',
});

class App {
  constructor() {
    this.gameStatus = GameStatus.ongoing;
  }

  async play() {
    const computer = new Computer();
    await computer.startGame();
    if (computer.isGameOver) await this.checkRestart();
  }

  async checkRestart() {
    this.gameStatus = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );

    switch (this.gameStatus) {
      case GameStatus.ongoing:
        app.play();
        break;

      case GameStatus.over:
        MissionUtils.Console.print('게임을 종료합니다.');
        break;

      default:
        throw new Error('[ERROR] 1 또는 2가 입력되지 않았습니다.');
    }
  }
}

const app = new App();
app.play();

export default App;
