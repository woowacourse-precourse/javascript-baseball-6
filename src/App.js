import { Console } from '@woowacourse/mission-utils';
import BaseballGame from './BaseballGame.js';
import GameInteraction from './GameInteraction.js';
import MESSAGES from './Messages.js';

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  async play() {
    try {
      Console.print(MESSAGES.MSG_START);
      let isGameOver = false;

      while (!isGameOver) {
        this.baseballGame.createComputerNumbers();
        isGameOver = await this.playRound();
      }
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async playRound() {
    let isRoundOver = false;

    while (!isRoundOver) {
      try {
        const userNumbers = await GameInteraction.inputUserNumbers();
        const result = this.baseballGame.calculateBallAndStrike(userNumbers);
        GameInteraction.printResult(result);

        if (result.strike === 3) {
          Console.print(MESSAGES.MSG_END);
          isRoundOver = true;
          return await this.askToRestartOrExit();
        }
      } catch (error) {
        throw error;
      }
    }
    return null;
  }

  async askToRestartOrExit() {
    try {
      const answer = await GameInteraction.askToRestartGame();

      if (answer === '1') {
        this.baseballGame.resetComputerNumbers();
        return false;
      } if (answer === '2') {
        return true;
      }
    } catch (error) {
      throw error;
    }
    return null;
  }
}

// const app = new App();
// app.play();

export default App;
