import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다');
    try {
      const userInput = await this.getUserInput();
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }

  async getUserInput() {
    return Console.readLineAsync('숫자를 입력해주세요 : ');
  }

}

const app = new App();
app.play();

export default App;