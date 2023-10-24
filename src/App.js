import { MissionUtils } from "@woowacourse/mission-utils";
import * as Constants from './const/Messages';
import RandomNumberMaker from './utils/RandomNumberMaker';
import UserNumberReader from './utils/UserNumberReader';
import { correctNumber } from './utils/CorrectUserNumber';
import { showResult } from './utils/GameResult';
import ReplayManager from "./utils/ReplayManager";
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
    await this.startGame();
  }

  async startGame() {
    try {
      while (this.gameState !== 'end') {
        await this.getUserInput();
      }
    } catch (error) {
      Console.print(Constants.GAME_OVER);
      this.endGame();
      return Promise.reject(error);
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
    }
  }

  isGameOver(computerNumber, playerNumber) {
    return computerNumber === playerNumber;
  }

  endGame() {
    this.gameState = 'end';
  }
}

if (process.env.NODE_ENV !== 'test') {
  const app = new App();
  app.play();
}

export default App;