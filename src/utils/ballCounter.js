import GameController from '../controller/gameController.js';
import InputHandler from '../utils/inputHandler.js';
import MESSAGE from '../constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

const BallCounter = {
  async ballCount(input, computerNumbers) {
    const strike = 0;
    const ball = 0;
    const userNumbers = String(input).split('').map(Number);
    computerNumbers.forEach(async (computerNumber, i) => {
      if (computerNumber === userNumbers[i]) strike += 1;
      else if (computerNumbers.includes(userNumbers[i])) ball += 1;

      await this.printResult(strike, ball);
    });
  },

  async printResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print(MESSAGE.GAME.RESULT.NOTHING);
    } else if (strike === 0) {
      Console.print(`${ball}${MESSAGE.GAME.RESULT.BALL}`);
    } else if (ball === 0) {
      Console.print(`${strike}${MESSAGE.GAME.RESULT.STRIKE}`);
    } else {
      Console.print(
        `${ball}${MESSAGE.GAME.RESULT.BALL} ${strike}${MESSAGE.GAME.RESULT.STRIKE}`
      );
    }

    if (strike === 3) {
      Console.print(MESSAGE.GAME.RESULT.SUCCESS);
      const game = new GameController();
      await game.startGame();
    }
    InputHandler.userInput();
  },
};

export default BallCounter;
