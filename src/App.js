import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {}

  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  makeRamdomNumber() {}

  async getUserNumber() {
    try {
      const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
      Console.print(`숫자 ${input}`);
    } catch (error) {

    }
    
  }

  compareUserAndRamdomNumber() {}

  notifyGameEnd() {}
}

const app = new App();
app.printGameStart();
app.getUserNumber();

export default App;
