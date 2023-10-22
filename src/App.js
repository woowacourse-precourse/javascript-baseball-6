import RandomNumberMaker from '../src/play/RandomNumberMaker';
import UserNumberReader from '../src/play/UserNumberReader';
import { correctNumber } from './Utils/CorrectNumber';
import BetweenNumber from './play/BetweenNumber';
import { showResult } from './play/GameResult';

class App {
  constructor() {
    this.maker = new RandomNumberMaker();
    this.reader = new UserNumberReader();
  }

  async play() {
    try {
      const uniqueNumber = this.maker.makeRandomNumber();
      Console.print(`컴퓨터의 숫자: ${uniqueNumber}`);

      while (true) {
        const userNumber = await Console.readLineAsync();
        if (!correctNumber(userNumber)) {
          Console.print("유효하지 않은 입력값입니다. 세 자리의 유일한 숫자를 입력해주세요.");
          continue;
        }

        this.reader.setUserNumber(userNumber);
        const userAnswer = this.reader.getUserNumber();
        Console.print(`사용자의 숫자: ${userAnswer}`);
        
        showResult(uniqueNumber, userAnswer);

        if (this.isGameOver(uniqueNumber, userAnswer)) {
          break;
        }
      }
    } catch (error) {
      
    }
  }

  isGameOver(computerNumber, playerNumber) {
    return computerNumber === playerNumber;
  }
}

export default App;