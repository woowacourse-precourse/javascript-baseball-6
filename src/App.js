import { MissionUtils } from "@woowacourse/mission-utils";
import RandomNumberMaker from './play/RandomNumberMaker';
import UserNumberReader from './play/UserNumberReader';
import { correctNumber } from './Utils/CorrectNumber';
import * as Constants from './const/Messages';
import { showResult } from './play/GameResult';
const Console = MissionUtils.Console;

class App {
  constructor() {
    this.maker = new RandomNumberMaker();
    this.reader = new UserNumberReader();
  }

  async play() {
    try {
      Console.print(Constants.GAME_START); // 게임 시작
      const uniqueNumber = this.maker.makeRandomNumber();

      while (true) {
        const userNumber = await Console.readLineAsync(); // 사용자 수 읽기
        if (!correctNumber(userNumber)) {
          throw new Error("[ERROR]"); // 예외 발생
        }

        this.reader.setUserNumber(userNumber);
        const userAnswer = this.reader.getUserNumber();
        Console.print(`${Constants.NOTICE_INPUT} : ${userAnswer}`);
        
        showResult(uniqueNumber, userAnswer); // 결과 문구

        if (this.isGameOver(uniqueNumber, userAnswer)) { 
          Console.print(Constants.GOAL);
          Console.print(Constants.SUGGEST_REPLAY);
          const userChoice = await Console.readLineAsync();
          if (userChoice === '1') {
            return this.play(); // 새로운 게임 시작
          } else if (userChoice === '2') {
            Console.print(Constants.GAME_OVER);
            return; // 게임 종료
          }
        }
      }
    } catch (error) {
      Console.print(Constants.GAME_OVER);
      return Promise.reject(error);
    }
  }

  isGameOver(computerNumber, playerNumber) {
    return computerNumber === playerNumber; // 게임 종료
  }
}

export default App;