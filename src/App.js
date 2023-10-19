import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.notifyGameStart();
    const number = await this.notifyGameEnd();
    this.isExecuteGame(number);
  }

  notifyGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  makeRamdomNumber() {}

  async getUserNumber() {
    try {
      const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
      //input 잘못 입력 안했는지 확인해야함
      Console.print(`숫자 ${input}`);
    } catch (error) {
      throw new Error('reject');
    }
  }

  compareUserAndRamdomNumber(input) {
  }

  async notifyGameEnd() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    
    try {
      const input = await Console.readLineAsync('');
      return input;
    } catch (error) {
      throw new Error('reject');
    }
  }

  isExecuteGame(input) {
    if (input === '1') {
      return this.getUserNumber();
    } else if (input === '2') {
      return;
    } else {
      throw new Error('게임 실행 조건을 잘못 입력하셨습니다.');
    }
  }
}

const app = new App();
app.play();

export default App;