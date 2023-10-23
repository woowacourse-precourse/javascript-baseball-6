import { MissionUtils } from "@woowacourse/mission-utils";
import * as Constants from './const/Messages';
import RandomNumberMaker from './play/RandomNumberMaker';
import UserNumberReader from './play/UserNumberReader';
import { correctNumber } from './Utils/CorrectNumber';
import { showResult } from './play/GameResult';
import ReplayManager from "./play/ReplayManager";
const Console = MissionUtils.Console;

class App {
  constructor() {
    this.maker = new RandomNumberMaker();
    this.reader = new UserNumberReader();
    this.replayManager = new ReplayManager();
  }

  async play() {
    try {
      while (true) {
        Console.print(Constants.GAME_START); // 게임 시작
        const uniqueNumber = this.maker.makeRandomNumber();
  
        const userNumber = await Console.readLineAsync(); // 사용자 수 읽기
        if (!correctNumber(userNumber)) {
          throw new Error("[ERROR]"); // 예외 발생
        }

        this.reader.setUserNumber(userNumber);
        const userAnswer = this.reader.getUserNumber();
        Console.print(`${Constants.NOTICE_INPUT} : ${userAnswer}`);
        
        showResult(uniqueNumber, userAnswer); // 결과 문구

        if (this.isGameOver(uniqueNumber, userAnswer)) { 
          await this.replayManager.handleReplay(this);
          if (!replay) {
            break; // 리플레이 하지 않으면 무한 루프 종료
          }
        }
      }
    } catch (error) {
      Console.print(Constants.GAME_OVER);
      //Console.print(error.message);
      return Promise.reject(error);
    }
  }

  isGameOver(computerNumber, playerNumber) {
    return computerNumber === playerNumber; // 게임 종료
  }
}

export default App;