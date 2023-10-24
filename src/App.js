import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer';
import InputCheck from './InputCheck';
import { GAME_MESSAGE } from './Message';
class App {
  async play() {
    try {
      Console.print(GAME_MESSAGE.START_MESSAGE);
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
            GAME_MESSAGE.INPUT_MESSAGE
          );
          inputCheck.checkInputNumber(userNumber);
          let strikeBall = computer.countStrikeBall(computerNumber, userNumber);
          strike = strikeBall[0];
          ball = strikeBall[1];
          if (strike === 3) round = false;
          computer.resultPrint(strike, ball);
        }
        Console.print(GAME_MESSAGE.END_MESSAGE);
        const input = await Console.readLineAsync(GAME_MESSAGE.RESTART_MESSAGE);
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
