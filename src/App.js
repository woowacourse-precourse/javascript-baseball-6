import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다');
    try {
      let userInput = await this.getUserInput();
      let computer = this.computerPicksNumber();
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }

  async getUserInput() {
    return Console.readLineAsync('숫자를 입력해주세요 : ');
  }
  
  computerPicksNumber() {
    const computerPickArr = [];

    while (computerPickArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerPickArr.includes(number)) {
        computerPickArr.push(number);
      }
    }

    const computerPick = computerPickArr.join('');
    return computerPick;
  }
}

const app = new App();
app.play();

export default App;