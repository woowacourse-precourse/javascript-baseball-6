import { 
  getComputerNumber, 
  getGameResult, 
  printGameResult 
} from './utils/game';
import { 
  getInputNumber, 
  getInputContinueNumber 
} from './utils/user';
import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './constants/gameMessage';

class App {
  async play() {
    let computerNumber = await getComputerNumber();
    let userAnswer = 1;

    await MissionUtils.Console.print(GAME_MESSAGE.gameStart);

    while (userAnswer === 1) {
      const inputNumber = await getInputNumber();

      const { strike, ball } = getGameResult(computerNumber, inputNumber);

      await printGameResult(strike, ball);

      if (strike === 3) {
        userAnswer = await getInputContinueNumber();

        if (userAnswer === 1) {
            computerNumber = await getComputerNumber();
        }
      }
    }
  }
}

export default App;
