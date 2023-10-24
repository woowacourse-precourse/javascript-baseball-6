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
    Console.print(Constants.GAME_START);
  }

  setupNewGame() {
    this.randomNumber = this.maker.makeRandomNumber();
    this.gameState = 'ready';
  }

  async play() {
    this.setupNewGame();
    try {
      while (this.gameState !== 'ended') {
        await this.getUserInput();
      }
    } catch (error) {
      Console.print(error.message);
      this.endGame();
      return Promise.reject(error); // 오류가 발생하면 함수를 즉시 종료
    }
  }

  async getUserInput() {
    const userNumber = await Console.readLineAsync();
    if (!correctNumber(userNumber)) {
      throw new Error("[ERROR]");
    }

    this.reader.setUserNumber(userNumber);
    const userAnswer = this.reader.getUserNumber();
    Console.print(`${Constants.NOTICE_INPUT} : ${userAnswer}`);

    this.userAnswer = userAnswer;
    this.checkAnswer();
  }

  checkAnswer() {
    showResult(this.randomNumber, this.userAnswer);
    if (this.isGameOver(this.randomNumber, this.userAnswer)) {
      Console.print(Constants.GOAL);
      this.endGame();
      this.handleReplay();
    } else {
      this.getUserInput();
    }
  }

  async handleReplay() {
    const replayState = await this.replayManager.handleReplay();
    if (replayState === 'ready') {
      this.play();
    } else {
      this.endGame();
      //Console.print(Constants.GAME_OVER);
    }
  }

  isGameOver(computerNumber, playerNumber) {
    return computerNumber === playerNumber;
  }

  endGame() {
    this.gameState = 'ended';
  }
}

export default App;