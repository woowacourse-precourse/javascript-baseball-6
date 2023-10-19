import { Console } from '@woowacourse/mission-utils';

class App {
  constructor (computer) {
    this.computer = computer;
  }

  async play() {}

  notifyGameStart() {
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

  isExecuteGame(input) {
    if (input === computer) {

    } else if (input === 1) {

    } else if (input === 2) {
      
    }
  }
}

const app = new App();
app.printGameStart();
app.getUserNumber();

export default App;
