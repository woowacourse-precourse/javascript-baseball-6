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
    this.gameState = 'ready';
  }

  async play() {
    try {
      Console.print(Constants.GAME_START); // 게임 시작
      this.randomNumber = this.maker.getRandomNumber();

      while (this.gameState !== 'ended') {
        await this.nextStep();
      }
    } catch (error) {
      Console.print(Constants.GAME_OVER);
      //Console.print(error.message);
      return Promise.reject(error);
    }
  }

  async nextStep() {
    if (this.gameState === 'ready') {
      await this.getUserInput();
    } else if (this.gameState === 'playing') {
      await this.checkAnswer();
    } else if (this.gameState === 'finished') {
      await this.handleReplay();
    }
  }

  async getUserInput() {
    const userNumber = await Console.readLineAsync(); // 사용자 수 읽기
    if (!correctNumber(userNumber)) {
      throw new Error("[ERROR]"); // 예외 발생
    }

    this.reader.setUserNumber(userNumber);
    const userAnswer = this.reader.getUserNumber();
    Console.print(`${Constants.NOTICE_INPUT} : ${userAnswer}`);

    this.userAnswer = userAnswer;
    this.gameState = 'playing';
    await this.nextStep();
  }

  async checkAnswer() {
    showResult(this.randomNumber, this.userAnswer); // 결과 문구

    if (this.isGameOver(this.randomNumber, this.userAnswer)) {
      Console.print(Constants.GOAL);
      this.gameState = 'finished';
    } else {
      this.gameState = 'ready';
    }
    await this.nextStep();
  }

  async handleReplay() {
    this.gameState = await this.replayManager.handleReplay();
    await this.nextStep();
  }

  isGameOver(computerNumber, playerNumber) {
    return computerNumber === playerNumber; // 게임 종료
  }
}

export default App;