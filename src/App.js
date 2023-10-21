import { MissionUtils } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

Console.print('Dd');

class App {
  async play() {
    this.StartMessage(); // StartMessage 메서드 호출
    const userInput = await this.InputPlayerNumbers();
    this.MakeRandomNumbers();
  }

  StartMessage() {
    const StartMessage = '숫자 야구 게임을 시작합니다.';
    Console.print(StartMessage);
  }

  MakeRandomNumbers() {
    let computer = [];
    while (computer.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    // console.print(computer);
  }

  async InputPlayerNumbers() {
    try {
      const input = await Console.readLineAsync('숫자를 입력해주세요 :');
    } catch (error) {
      // reject 되는 경우
      Console.print('[Error]');
    }
  }
}

const app = new App();
app.play();

export default App;
