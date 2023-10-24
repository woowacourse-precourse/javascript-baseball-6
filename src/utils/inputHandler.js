import MESSAGE from '../constants/messages.js';
import { Console } from '@woowacourse/mission-utils';
import inputValidator from '../validator/inputValidator.js';
import GameController from '../controller/gameController.js';

const InputHandler = {
  async userInput() {
    const userNum = await Console.readLineAsync(MESSAGE.GAME.INPUT);
    inputValidator.validateNumber(userNum);
    return userNum;
  },
  async inputRestartNumber() {
    const num = await Console.readLineAsync(MESSAGE.GAME.END);
    inputValidator.validateRestart(num);
    if (num === 1) {
      const game = new GameController();
      await game.restartGame();
    } else if (num === 2) {
      return;
    }
  },
};

export default InputHandler;
