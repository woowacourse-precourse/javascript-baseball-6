import RandomNumberMaker from '../src/play/RandomNumberMaker';
import UserNumberReader from '../src/play/UserNumberReader';
import { correctNumber } from './Utils/CorrectNumber';
import * as Constants from '../const/Messages';
import { showResult } from './play/GameResult';

class App {
  constructor() {
    this.maker = new RandomNumberMaker();
    this.reader = new UserNumberReader();
  }

  async play() {
    try {
      Console.print(Constants.START_MESSAGE); // 게임 시작
      const uniqueNumber = this.maker.makeRandomNumber();

      while (true) {
        Console.print(Constants.NOTICE_INPUT);
        const userNumber = await Console.readLineAsync(); // 사용자 수 읽기
        if (!correctNumber(userNumber)) {
          throw new Error(Constants.WRONG_NUMBER); // 예외 발생
        }

        this.reader.setUserNumber(userNumber);
        const userAnswer = this.reader.getUserNumber();
        Console.print(`사용자의 숫자: ${userAnswer}`);
        
        showResult(uniqueNumber, userAnswer); // 결과 문구

        if (this.isGameOver(uniqueNumber, userAnswer)) { 
          break;
        }
      }
    } catch (error) {
      Console.print(Constants.ERROR_MESSAGE); // 에러 메시지 출력
    }
  }

  isGameOver(computerNumber, playerNumber) {
    return computerNumber === playerNumber; // 게임 종료
  }
}

export default App;