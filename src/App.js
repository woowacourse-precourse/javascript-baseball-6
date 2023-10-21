import { MissionUtils } from '@woowacourse/mission-utils';

class App {
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
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;
