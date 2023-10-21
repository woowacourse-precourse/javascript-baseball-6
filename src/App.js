import { MissionUtils } from '@woowacourse/mission-utils';
import BaseballGame from './BaseballGame.js';

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.gameStartMessage();
    this.getUserInputAsync();
  }

  gameStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  async getUserInputAsync() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해 주세요 :'
      );
      await this.baseballGame.play(userInput);
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;
