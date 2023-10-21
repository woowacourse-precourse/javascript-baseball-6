import RandomNumberMaker from '../src/play/RandomNumberMaker';
import UserNumberReader from '../src/play/UserNumberReader';
import correctNumber from '../src/utils/correctNumber';
import * as Constants from './constants.js';

// Console.print(Constants.GAME_START);

class App {
  constructor() {
    this.maker = new RandomNumberMaker();
    this.reader = new UserNumberReader();
  }

  async play() {
    try {
      const uniqueNumber = this.maker.makeRandomNumber();
      Console.print(uniqueNumber);

      const userNumber = await Console.readLineAsync();
      if (!correctNumber(userNumber)) {
        throw new Error("유효하지 않은 입력값입니다.");
      }

      this.reader.setUserNumber(userNumber);
      const userAnswer = this.reader.getUserNumber();
      Console.print(userAnswer);
    } catch (error) {
      
    }
  }
}

export default App;