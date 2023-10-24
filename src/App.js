import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer';
import InputCheck from './InputCheck';
class App {
  async play() {
    try {
      Console.print('숫자 야구 게임을 시작합니다.');
      const computer = new Computer();
      const inputCheck = new InputCheck();
      let isGame = true;
      while (isGame) {
        let computerNumber = computer.createRandomNumber();
        let round = true;
        while (round) {
          let strike = 0;
          let ball = 0;
          const userNumber = await Console.readLineAsync(
            '숫자를 입력해주세요 :'
          );
          inputCheck.checkInputNumber(userNumber);
          let strikeBall = computer.countStrikeBall(computerNumber, userNumber);
          strike = strikeBall[0];
          ball = strikeBall[1];
          if (strike === 3) round = false;
          computer.resultPrint(strike, ball);
        }
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const input = await Console.readLineAsync(
          '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
        );
        inputCheck.restartInputCheck(input);
        if (input === '2') isGame = false;
      }
    } catch (e) {
      Console.print(e);
      return Promise.reject(e);
    }
  }
}
const app = new App();
app.play();
export default App;
